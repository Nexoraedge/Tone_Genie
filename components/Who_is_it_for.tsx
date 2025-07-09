import React from 'react'
import {motion} from 'framer-motion'
import { forwhom } from '@/const'
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

const Who_is_it_for = () => {
  return (
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
  )
}

export default Who_is_it_for