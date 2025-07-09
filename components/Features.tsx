import React from 'react'
import {motion} from 'framer-motion'
import { Powerful_features } from '@/const'
const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }
const Features = () => {
  return (
    <section className="py-20 px-4 relative">
        {/* Purple glow background */}
        
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
                className="bg-gradient-to-br from-[#7e7ef56f] via-[#050505] to-[#8628f9a2] rounded-2xl p-6 border border-[#27272a] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                

                <div className="w-12 h-12 bg-gradient-to-r from-[#232336] to-[#131316] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 [#f3f4f6]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{feature.description}</p>
               
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default Features