// /src/app/api/user/route.ts   (Next-13 “app” router)
import { NextRequest, NextResponse } from 'next/server';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { withCors } from '@/lib/cors';

// ---------- Firebase Admin initialise (reuse for all routes) ----------
function initFirebase() {
  if (getApps().length === 0) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Missing Firebase service-account env vars.');
    }

    initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
  }
}

// ---------- POST /api/user --------------------------------------------
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { uid, name, email, provider, extVersion, ua } = body as {
      uid: string;
      name: string;
      email: string;
      provider: 'google' | 'github' | string;
      extVersion?: string;
      ua?: string;
    };

    // Basic validation
    if (!uid || !name || !email) {
      return withCors(NextResponse.json(
        { error: 'uid, name and email are required' },
        { status: 400 }
      ));
    }

    initFirebase();
    const db = getFirestore();

    await db.collection('users').doc(uid).set(
      {
        name,
        email,
        provider: provider || null,
        extVersion: extVersion || null,
        ua: ua || req.headers.get('user-agent') || null,
        createdAt: new Date().toISOString()
      },
      { merge: true } // updates if the doc already exists
    );

    return withCors(NextResponse.json({ ok: true }, { status: 201 }));
  } catch (err: any) {
    console.error('[user API] Error:', err);
    return withCors(NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }));
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get('uid');
    if (!uid) {
      return withCors(NextResponse.json({ error: 'uid is required' }, { status: 400 }));
    }
    initFirebase();
    const db = getFirestore();
    const docRef = db.collection('users').doc(uid); // note: 'users' (lowercase)
    const docSnap = await docRef.get();
    if (docSnap.exists) {
      return withCors(NextResponse.json({ user: docSnap.data() }, { status: 200 }));
    } else {
      return withCors(NextResponse.json({ error: 'User not found' }, { status: 404 }));
    }
  } catch (err: any) {
    console.error('[user API] GET Error:', err);
    return withCors(NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }));
  }
}