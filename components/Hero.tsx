import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Zap, Users, Globe, Star, ArrowRight, CheckCircle, Keyboard, MousePointer, Wand2, Github, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
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
            <Link href="https://github.com/Nexoraedge/" className="text-xl flex items-center w-full justify-center gap-2 px-8 py-4 rounded-xl  shadow-lg" target="_blank">
            <Sparkles className="w-5 h-5" />
            Try Now !!
            <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-l cursor-pointer from-[#2f2e2f] via-[#767676] to-[#2f2e2f] border border-[#27272a]  rounded-xl font-semibold text-lg hover:bg-[#232336] transition-all duration-300"
          >
           <Link href="https://youtube.com/shorts/zpJMzjUm6hs?si=S0HiPOcsWRBEw9ld" className="text-xl flex items-center w-full justify-center gap-2 px-8 py-4 rounded-xl  shadow-lg" target="_blank">
           
           Watch Demo
           
           </Link>
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
  )
}

export default Hero