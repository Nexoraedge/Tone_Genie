import { NextRequest, NextResponse } from 'next/server';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// -------- Firebase Admin Initialise ----------
function initFirebase() {
  if (getApps().length === 0) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // Replace escaped newlines in private key
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Missing Firebase service account environment variables.');
    }

    initializeApp({
      credential: cert({ projectId, clientEmail, privateKey })
    });
  }
}

// -------- API Route Handlers ----------

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const minStarsParam = searchParams.get('minStars');
    const minStars = minStarsParam ? Number(minStarsParam) : 4;

    initFirebase();
    const db = getFirestore();

    // Firestore supports >= query on indexed fields. Ensure an index exists if needed.
    const snapshot = await db
      .collection('review')
      .where('stars', '>=', minStars)
      .orderBy('stars', 'desc')
      .limit(25)
      .get();

    let reviews = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // sort by createdAt desc on client side
    reviews = reviews.sort((a: any, b: any) => (b.createdAt ?? '').localeCompare(a.createdAt ?? ''));

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (err: any) {
    console.error('[review API] GET Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// -------- POST handler ----------
export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();

    // Basic schema validation – ensure required fields exist
    const { stars, comment, extVersion, ua } = body as {
      stars: number;
      comment: string;
      extVersion?: string;
      ua?: string;
    };

    if (typeof stars !== 'number' || stars < 1 || stars > 5) {
      return NextResponse.json({ error: 'Invalid "stars" – must be 1-5' }, { status: 400 });
    }

    if (!comment || typeof comment !== 'string') {
      return NextResponse.json({ error: 'Invalid "comment"' }, { status: 400 });
    }

    // Initialise Firebase and get Firestore instance
    initFirebase();
    const db = getFirestore();

    // Add timestamp server-side
    const docRef = await db.collection('review').add({
      stars,
      comment,
      extVersion: extVersion || null,
      ua: ua || request.headers.get('user-agent') || null,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (err: any) {
    console.error('[review API] Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
