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
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])



  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen py-5 px-2  text-[#f3f4f6] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#9029e4] to-[#a78bfa] rounded-xl flex items-center justify-center mr-4">
                {/* <Wand2 className="w-6 h-6 [#f3f4f6]" /> */}
                <Image src={"/logo.png"} alt="Logo" className="w-11 h-11 rounded-xl text-[#f3f4f6]" width={100} height={100} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#9029e4] to-[#a78bfa] bg-clip-text text-transparent">
                ToneGenie AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Write Better.{" "}
              <span className="bg-gradient-to-r from-[#9029e4] to-[#a78bfa] bg-clip-text text-transparent">
                Sound Smarter
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-[#9ca3af] mb-8 max-w-2xl"
            >
             Instantly enhance your text with AI-powered tone rewriting — from emails to gig descriptions, ToneGenie does it all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(167, 139, 250, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r cursor-pointer from-[#9029e4] to-[#a78bfa]  rounded-xl font-semibold text-lg  shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="https://github.com/Nexoraedge/Text_Enhancer" className="text-xl flex items-center w-full justify-center gap-2 px-8 py-4 rounded-xl  shadow-lg" target="_blank">
                <Sparkles className="w-5 h-5" />
                Try Now !!
                <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border cursor-pointer border-[#27272a] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#232336] transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            <div className="bullets pt-4">
              <ul className="space-y-2">
                <li className=" text-[#e8d9f9] ">✅ Works on any website</li>
                <li className="text-[#e8d9f9]">✅ No signup required</li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-[#8c8c8f]"
            >
              {/* <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div> */}
              <span>💬 Your feedback shapes ToneGenie — <Link className="text-[#e8d9f9]" href="/feedback">rate now</Link> or <Link className="text-[#e8d9f9]" href="/feedback" >Leave a Review</Link></span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-[#232336] to-[#131316] rounded-2xl p-8 shadow-[0_0_14px_#9029e4] border border-[#27272a]"
              >
                <Image
                  src="/ss.png"
                  alt="ToneGenie AI Popup Interface"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-[#9029e4]/20 backdrop-blur-sm rounded-full p-3"
              >
                <Sparkles className="w-6 h-6 text-[#9029e4]" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 bg-[#a78bfa]/20 backdrop-blur-sm rounded-full p-3"
              >
                <Zap className="w-6 h-6 text-[#a78bfa]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How{" "}
              <span className="bg-gradient-to-r from-[#c693f0] via-[#9029e4] to-[#baa7f1] bg-clip-text text-transparent">
              ToneGenie{" "}
              </span>
              works
            </h2>
            <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">Enhancing your text is as easy as 1-2-3.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {icons.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#232336] to-[#131316] rounded-2xl p-8 border border-[#27272a] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#9029e4] to-[#a78bfa] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 [#f3f4f6]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-[#9ca3af] text-center leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shortcut Showcase */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Lightning-Fast Shortcuts</h2>
            <p className="text-xl text-[#9ca3af]">Master these shortcuts to save hours on writing.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.map(({ first, second, third, extra, smallD, initial }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: initial }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#232336] to-[#131316] rounded-2xl p-8 border border-[#27272a]"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="flex gap-2">
                    <kbd className="px-3 py-2 bg-[#9029e4]/20 border border-[#9029e4]/30 rounded-lg font-mono text-sm">
                      {first}
                    </kbd>
                    <span className="text-2xl">+</span>
                    <kbd className="px-3 py-2 bg-[#9029e4]/20 border border-[#9029e4]/30 rounded-lg font-mono text-sm">
                      {second}
                    </kbd>
                    <span className="text-2xl">+</span>
                    <kbd className="px-3 py-2 bg-[#9029e4]/20 border border-[#9029e4]/30 rounded-lg font-mono text-sm">
                      {third}
                    </kbd>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{smallD}</h3>
                <p className="text-[#9ca3af]">{extra}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            
              <span className="bg-gradient-to-r from-[#9029e4] to-[#a78bfa] bg-clip-text text-transparent">
              AI-Powered{" "} 
              </span>
              Tools for Every Writer
            </h2>
            <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">
              Everything you need to write better, faster, and smarter
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Powerful_features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#232336] to-[#131316] rounded-2xl p-6 border border-[#27272a] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#9029e4] to-[#a78bfa] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 [#f3f4f6]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Perfect For{" "}
              <span className="bg-gradient-to-r from-[#9029e4] to-[#a78bfa] bg-clip-text text-transparent">
                Everyone
              </span>
            </h2>
            <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">
            Whether you're writing your next pitch or love letter, ToneGenie adapts to your tone.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {forwhom.map((user, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#232336] to-[#131316] rounded-xl p-6 border border-[#27272a] text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{user.emoji}</div>
                <h3 className="font-semibold">{user.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl mb-6 italic">"{testimonials[currentTestimonial].content}"</p>
              <div>
                <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-[#9ca3af]">{testimonials[currentTestimonial].role}</p>
              </div>
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
            {testimonials.map((_, index) => (
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
            ><Link target="_blank" className="text-xl flex items-center w-full justify-center gap-3 px-12 py-4 rounded-xl  shadow-lg" href="https://github.com/Nexoraedge/Text_Enhancer">
              <Sparkles className="w-6 h-6" />
              Try Extension now
              <ArrowRight className="w-6 h-6" />
            </Link>
            </motion.button>

            <p className="text-[#8c8c8f] mt-4">No signup required • Works instantly • 30-day money-back guarantee</p>
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
  )
}
