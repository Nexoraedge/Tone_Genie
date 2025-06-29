"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-5 text-[#f3f4f6]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl p-6 sm:p-10 no-scrollbar rounded-2xl border border-purple-500/40 bg-purple-950/30 bg-clip-padding backdrop-blur-xl shadow-2xl md:max-h-[80vh] md:overflow-y-auto"
      >
        <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-[#c693f0] via-[#9029e4] to-[#baa7f1] bg-clip-text text-transparent">
          ToneGenie AI — Privacy Policy
        </h1>
        <p className="text-center text-sm text-[#9ca3af] mb-8">Effective Date: {formatted}</p>

        <div className="space-y-6 leading-relaxed text-lg">
          <section>
            <h2 className="font-semibold text-2xl mb-2">1. Data Collection</h2>
            <p> ToneGenie AI does <strong>not</strong> collect personal data, browsing history, or any identifiable information. All processing happens locally within your browser.</p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">2. Permissions</h2>
            <p>The extension needs permission to read the text you select and replace it with AI-generated enhancements. ToneGenie never tracks your activity or stores your input.</p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">3. Third-Party APIs</h2>
            <p>We securely call AI providers (e.g., OpenAI, Gemini) to generate rewritten text. No personally identifiable information is sent to these services.</p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">4. Cookies</h2>
            <p>ToneGenie AI does not use cookies.</p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">5. Updates</h2>
            <p>If we update this policy, we will announce it on the Chrome Web Store listing.</p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">6. Contact Us</h2>
            <p>If you have any questions, please email us at <a href="mailto:hardikjain2030@gmail.com" className="text-[#c693f0] underline">hardikjain2030@gmail.com</a>.</p>
          </section>
        </div>

      </motion.div>
        <div className="mt-10 flex justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer  items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9029e4] to-[#a78bfa] font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </motion.button>
          </Link>
        </div>
    </div>
  );
}
