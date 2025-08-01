import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

/**
 * API route to receive feedback form submissions and store them in Firebase Firestore.
 *
 * Environment variables required (see lib/firebaseAdmin.ts):
 *  FIREBASE_PROJECT_ID
 *  FIREBASE_CLIENT_EMAIL
 *  FIREBASE_PRIVATE_KEY  (escaped with \n)
 */
export const runtime = "nodejs"; // Firestore requires Node runtime

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const minRatingParam = searchParams.get("minRating");
    const minRating = minRatingParam ? Number(minRatingParam) : 4;

    const snapshot = await db
      .collection("feedback")
      .where("rating", ">=", minRating)
      .orderBy("rating", "desc")
      .limit(25)
      .get();

    let feedback = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    feedback = feedback.sort((a: any, b: any) => (b.createdAt ?? 0) - (a.createdAt ?? 0));

    return NextResponse.json({ feedback }, { status: 200 });
  } catch (err: any) {
    console.error("[feedback API] GET Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, love, improve, features, rating, Id } = await request.json();

    // Basic validation – extend as needed
    if (!love && !improve && !features) {
      return NextResponse.json({ error: "No feedback provided" }, { status: 400 });
    }

    // Save to Firestore
    await db.collection("feedback").add({
      name: name || "Anonymous",
      Id,
      love,
      improve,
      features,
      rating,
      createdAt: Date.now(),
    });

    return NextResponse.json({ message: "Feedback sent" }, { status: 200 });
  } catch (err: any) {
    console.error("Feedback save failed", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
