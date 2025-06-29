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

export async function POST(request: Request) {
  try {
    const { name, love, improve, features, rating } = await request.json();

    // Basic validation – extend as needed
    if (!love && !improve && !features) {
      return NextResponse.json({ error: "No feedback provided" }, { status: 400 });
    }

    // Save to Firestore
    await db.collection("feedback").add({
      name: name || "Anonymous",
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
