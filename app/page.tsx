"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Sparkles,
  Zap,
  Users,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Keyboard,
  MousePointer,
  Wand2,
  Github,
  Twitter,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { testimonials, icons, Powerful_features, forwhom, data, extralinks, socaillinks } from "@/const/index"
import { hr, th } from "motion/react-client"
import Hero from "@/components/Hero"
import How_it_works from "@/components/How_it_works"
import Shortcut from "@/components/Shortcut"
import Features from "@/components/Features"
import Who_is_it_for from "@/components/Who_is_it_for"
import SmoothScroll from "@/components/SmoothScroll"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  const [feedback, setFeedback] = useState<any[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])



  const displayFeedback = feedback.length ? feedback : testimonials;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % displayFeedback.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + displayFeedback.length) % displayFeedback.length)
  }

  // auto-cycle testimonial every 5 s
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [displayFeedback.length]);

  // fetch feedback once on mount
  useEffect(() => {
    fetch('/api/feedback?minRating=4')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.feedback) && data.feedback.length) {
          setFeedback(data.feedback as any[]);
          setCurrentTestimonial(0);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <SmoothScroll>
    <div className="min-h-screen py-5 px-2  text-[#f3f4f6] overflow-hidden">
      {/* Hero Section */}
    <Hero />

      {/* How It Works Section */}
   <How_it_works />     
 
      {/* Shortcut Showcase */}
    <Shortcut />
      {/* Features Section */}
     <Features />

      {/* Who It's For Section */}
      <Who_is_it_for />
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Users{" "}
              <span className="bg-gradient-to-r from-[#9029e4] to-[#a78bfa] bg-clip-text text-transparent">
                Say
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#232336] to-[#131316] rounded-2xl p-8 border border-[#27272a] text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(displayFeedback[currentTestimonial]?.stars || displayFeedback[currentTestimonial]?.rating || 0)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl mb-6 italic">"{displayFeedback[currentTestimonial].love || displayFeedback[currentTestimonial].content}"</p>
              <h4 className="font-semibold text-lg text-[#9ca3af]">{displayFeedback[currentTestimonial].name || ''}</h4>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#232336] cursor-pointer border border-[#27272a] rounded-full flex items-center justify-center hover:bg-[#9029e4]/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 bg-[#232336] border border-[#27272a] rounded-full flex items-center justify-center hover:bg-[#9029e4]/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {displayFeedback.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-[#9029e4]" : "bg-[#27272a]"
                  }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
       <h3 className="text-2xl font-semibold">💡 Tried ToneGenie?</h3>
       <p className="text-base text-[#9ca3af]">
        <Link href={"/feedback"} className="bg-gradient-to-r from-[#9029e4] to-[#a78bfa] bg-clip-text text-transparent">Leave your review </Link>
         and get featured here!</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative">
      <div className="purple-glow"></div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Sound Like a{" "}
              <span className="bg-gradient-to-r from-[#9029e4] to-[#a78bfa] bg-clip-text text-transparent">
                Pro?
              </span>
            </h2>
            <p className="text-xl text-[#9ca3af] mb-8">
              Install ToneGenie in seconds and transform your writing forever
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#9029e4] to-[#a78bfa] cursor-pointer  mx-auto rounded-xl font-bold  hover:shadow-xl transition-all duration-300"
            ><Link target="_blank" className="text-xl flex items-center w-full justify-center gap-3 px-12 py-4 rounded-xl  shadow-lg" href="https://chromewebstore.google.com/detail/ealfaploahagilehoegggemodolcgjfi?utm_source=item-share-cb">
              <Sparkles className="w-6 h-6" />
              Try Extension now
              <ArrowRight className="w-6 h-6" />
            </Link>
            </motion.button>

            <p className="text-[#8c8c8f] mt-4">No signup required • Works instantly • completely free for now.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#9029e4] to-[#a78bfa] rounded-lg flex items-center justify-center">
                <Image src={"/logo.png"} alt="Logo" className="w-9 h-9 rounded-lg text-[#f3f4f6]" width={100} height={100} />
              </div>
              <span className="text-xl font-bold">ToneGenie AI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[#9ca3af]">
              {extralinks.map(({ href, text }, index) => (
                <Link id={href}
                  key={index} href={href} className="hover:text-[#9029e4] cursor-pointer transition-colors">
                  {text}
                </Link>
              ))}
            </div>

            <div className="flex gap-4">
              {socaillinks.map((some, index) => (
                <Link
                  key={index}
                  href={some.href}
                  target="_blank"
                  className="w-10 h-10 bg-[#232336] border cursor-pointer border-[#27272a] rounded-lg flex items-center justify-center hover:bg-[#9029e4]/20 transition-colors"
                >
                  <some.icon className="w-5 h-5" />
                </Link>
              ))}

            </div>
          </div>

          <div className="text-center text-[#8c8c8f] mt-8 pt-8 border-t border-[#27272a]">
            <p>&copy; 2025 ToneGenie AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </SmoothScroll>
  )
}
