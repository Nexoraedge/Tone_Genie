import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Client-side Firebase initialization. We guard against re-initializing
// when Hot Module Replacement (HMR) reloads the page in dev mode.
// The provided config is safe for the front-end.

// for local

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
// for production
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "toneginie.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "toneginie",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "toneginie.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "297868877529",
  appId: process.env.FIREBASE_APP_ID || "1:297868877529:web:472296d8ce6311a472e8c8",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-N1QXVS2NZB"
};

function createFirebaseApp(): FirebaseApp {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}

export const firebaseApp = createFirebaseApp();
export const auth = getAuth(firebaseApp);
