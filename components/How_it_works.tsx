import React from 'react'
import {motion} from 'framer-motion'
import { icons } from '@/const'


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

const How_it_works = () => {
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
              How{" "}
              <span className="bg-gradient-to-r from-[#c693f0] via-[#9029e4] to-[#baa7f1] bg-clip-text text-transparent">
              ToneGenie{" "}
              </span>
              works
            </h2>
            <p className="text-xl text-[#9ca3af] max-w-2xl mx-auto">Enhancing your text is as easy as 1-2-3🚀.</p>
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
  )
}

export default How_it_works