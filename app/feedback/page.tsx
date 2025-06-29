"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Send, CheckCircle, ArrowLeft, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    love: "",
    improve: "",
    features: "",
    rating: 0,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRatingClick = (rating: number) => {
    setFormData({
      ...formData,
      rating,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to send feedback")
      }

      setIsSubmitted(true)
    } catch (error) {
      alert(
        "Sorry, there was a problem submitting your feedback. Please try again later."
      )
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen  text-[#f3f4f6] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-success-color rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 [#f3f4f6]" />
          </motion.div>

          <h1 className="text-3xl font-bold mb-4">Thank You!🎉</h1>
          <p className="text-[#9ca3af] mb-8">
            Your feedback has been submitted successfully. We appreciate you taking the time to help us improve
            ToneGenie!
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#a78bfa] to-ry-[#9029e4] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#131316] to-[#18181b] text-[#f3f4f6]">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/10 via-transparent to-[#9029e4]/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a78bfa]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9029e4]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="bg-gradient-to-r from-[#a78bfa] to-[#9029e4] p-1 rounded-2xl mb-8 inline-block">
              <div className="bg-[#18181b] rounded-xl px-8 py-6">
                <h1 className="text-4xl font-bold mb-2">✨ We’d Love Your Feedback</h1>
                <p className="text-[#9ca3af]">Help shape the future of smart, AI-powered writing with your ideas & experiences.</p>
              </div>
            </div>
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#232336] to-[#131316] rounded-2xl p-8 border border-[#27272a] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                👤Your Name (optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#131316] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#a78bfa] focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* What do you love */}
              <div>
                <label htmlFor="love" className="block text-sm font-medium mb-2">
                ❤️ What’s your favorite thing about ToneGenie?
                </label>
                <textarea
                  id="love"
                  name="love"
                  value={formData.love}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#131316] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#a78bfa] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us what you enjoy most about using ToneGenie..."
                />
              </div>

              {/* What to improve */}
              <div>
                <label htmlFor="improve" className="block text-sm font-medium mb-2">
                🛠️ Any bugs or suggestions for improvement?
                </label>
                <textarea
                  id="improve"
                  name="improve"
                  value={formData.improve}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#131316] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#a78bfa] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Any bugs, issues, or areas for improvement..."
                />
              </div>

              {/* Feature requests */}
              <div>
                <label htmlFor="features" className="block text-sm font-medium mb-2">
                🚀 What new features would you love to see?
                </label>
                <textarea
                  id="features"
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#131316] border border-[#27272a] rounded-lg focus:ring-2 focus:ring-[#a78bfa] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="New features or improvements you'd like to see..."
                />
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium mb-3">🌟 Rate your experience using ToneGenie</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleRatingClick(star)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                        star <= formData.rating
                          ? "bg-yellow-400 text-yellow-900"
                          : "bg-[#131316] border border-[#27272a] hover:bg-[#232336]"
                      }`}
                    >
                      <Star className={`w-5 h-5 ${star <= formData.rating ? "fill-current" : ""}`} />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-[#a78bfa] to-[#9029e4] px-6 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sharing Thoughts...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Share My Thoughts
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-[#9ca3af] mb-4">Need help right now?</p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:hardikjain2030@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-[#232336] border border-[#27272a] rounded-lg hover:bg-[#a78bfa]/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
               Email Support
              </a>
              <a
                href="https://github.com/Nexoraedge"
                className="flex items-center gap-2 px-4 py-2 bg-[#232336] border border-[#27272a] rounded-lg hover:bg-[#a78bfa]/20 transition-colors"
              >
                <Github className="w-4 h-4" />
               GitHub Issues
              </a>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#9ca3af] hover:text-[#a78bfa] cursor-pointer transition-colors flex items-center gap-2 mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
