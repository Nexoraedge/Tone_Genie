import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Client-side Firebase initialization. We guard against re-initializing
// when Hot Module Replacement (HMR) reloads the page in dev mode.
// The provided config is safe for the front-end.
const firebaseConfig = {
  apiKey: "AIzaSyCXVBOKxT_NSKP2yUVufxFr_QImJGApD2E",
  authDomain: "toneginie.firebaseapp.com",
  projectId: "toneginie",
  storageBucket: "toneginie.firebasestorage.app",
  messagingSenderId: "297868877529",
  appId: "1:297868877529:web:472296d8ce6311a472e8c8",
  measurementId: "G-N1QXVS2NZB",
};

function createFirebaseApp(): FirebaseApp {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}

export const firebaseApp = createFirebaseApp();
export const auth = getAuth(firebaseApp);
