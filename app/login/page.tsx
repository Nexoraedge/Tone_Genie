"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseClient";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loadingProvider, setLoadingProvider] = useState<"google" | "github" | null>(null);

  const loginWithProvider = async (providerType: "google" | "github") => {
    setError(null);
    setLoadingProvider(providerType);
    try {
      const provider = providerType === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err: any) {
      setError(err.message ?? "Failed to login");
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f0f11] px-4 py-10">
      <div className="w-full max-w-sm bg-[#18181b] border border-[#27272a] rounded-2xl p-8 shadow-lg text-[#f3f4f6] space-y-5">
        <h1 className="text-2xl font-bold text-center">Sign in to ToneGenie</h1>

        <button
          onClick={() => loginWithProvider("google")}
          disabled={loadingProvider !== null}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loadingProvider === "google" ? (
            <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.3-1.5 3.9-5.1 3.9-3.1 0-5.6-2.6-5.6-5.7s2.5-5.7 5.6-5.7c1.8 0 3 0.7 3.7 1.4l2.5-2.4C16.9 3.4 14.6 2.4 12 2.4 6.9 2.4 2.8 6.5 2.8 11.6S6.9 20.8 12 20.8c5.1 0 8.5-3.5 8.5-8.5 0-.6-.1-1.2-.2-1.7H12z"/></svg>
          )}
          Continue with Google
        </button>

        <button
          onClick={() => loginWithProvider("github")}
          disabled={loadingProvider !== null}
          className="w-full flex items-center justify-center gap-3 bg-[#232336] border border-[#2e2e34] py-3 rounded-full font-medium hover:bg-[#2d2d3a] transition-colors disabled:opacity-50"
        >
          {loadingProvider === "github" ? (
            <span className="animate-spin h-5 w-5 border-2 border-[#f3f4f6] border-t-transparent rounded-full" />
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 1.3C5.4 1.3 0 6.7 0 13.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.5.2 2.7.1 3 .8.9 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" clipRule="evenodd"/></svg>
          )}
          Continue with GitHub
        </button>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      </div>
    </main>
  );
}
