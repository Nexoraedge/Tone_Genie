"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-5 text-[#f3f4f6]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl p-6 no-scrollbar sm:p-10 rounded-2xl border border-purple-500/40 bg-purple-950/30 bg-clip-padding backdrop-blur-xl shadow-2xl md:max-h-[80vh] md:overflow-y-auto"
      >
        <h1 className="text-4xl font-bold mb-2  text-center bg-gradient-to-r from-[#c693f0] via-[#9029e4] to-[#baa7f1] bg-clip-text text-transparent">
          ToneGenie AI — Terms & Conditions
        </h1>
        <p className="text-center text-sm text-[#9ca3af] mb-8">Last Updated: 29 June 2025</p>

        <div className="space-y-6 leading-relaxed text-lg">
          <section>
            <h2 className="font-semibold text-center text-2xl mb-2">1. Acceptance of Terms</h2>
            <p className="text-center text-base">By installing or using ToneGenie, you agree to these Terms of Use.</p>
          </section>

          <section>
            <h2 className="font-semibold text-center text-2xl mb-2">2. Usage</h2>
            <p className="text-center text-base">You may use this extension for personal or professional writing purposes. Commercial resale or misuse is prohibited.</p>
          </section>

          <section>
            <h2 className="font-semibold text-center text-2xl mb-2">3. AI Output</h2>
            <p className="text-center text-base">All AI-generated content should be reviewed by you. We do not guarantee accuracy or legal validity.</p>
          </section>

          <section>
            <h2 className="font-semibold text-center text-2xl mb-2">4. Intellectual Property</h2>
            <p className="text-center text-base"> ToneGenie’s name, logo, and UI are property of ToneGenie AI. You may not replicate them without permission.</p>
          </section>

          <section>
            <h2 className="font-semibold text-center text-2xl mb-2">5. Termination</h2>
            <p className="text-center text-base">We may terminate access if there is misuse or abuse.</p>
          </section>

          <section>
            <h2 className="font-semibold text-center text-2xl mb-2">6. Disclaimer</h2>
            <p className="text-center text-base">ToneGenie is provided “as is” without warranties of any kind.</p>
          </section>

          <section>
            <h2 className="font-semibold text-center text-2xl mb-2">7. Contact</h2>
            <p className="text-center text-base">If you have any questions about these terms, please email us at <a href="mailto:hardikjain2030@gmail.com" className="text-[#c693f0] underline">hardikjain2030@gmail.com</a>.</p>
          </section>
        </div>

      </motion.div>
        <div className="mt-10 flex justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9029e4] to-[#a78bfa] font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </motion.button>
          </Link>
        </div>
    </div>
  );
}
