import React from 'react'
import {motion} from 'framer-motion'
import { data } from '@/const'

const Shortcut = () => {
  return (
      <section className="py-20 px-4 relative">
        <div className="purple-glow"></div>
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

  )
}

export default Shortcut