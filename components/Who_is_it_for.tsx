import React from 'react'
import { motion } from 'framer-motion'
import { forwhom } from '@/const'


const Who_is_it_for = () => {

  return (
    <motion.div 
      data-scroll-section
      className="min-h-screen rounded-br-2xl rounded-tl-2xl bg-gradient-to-br from-[#7c17f87c] via-[#0f0118] to-[#7878dcb6] relative overflow-hidden"
      
      initial="hidden"
      animate="visible"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-8 py-16 relative z-10">
        {/* Title section */}
        <motion.div 
          className="text-center mb-16"
          
        >
          <motion.h2 
            className="text-5xl md:text-6xl data-scroll data-scroll-speed font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Perfect For{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Everyone
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            
          >
            Whether you're writing your next pitch or love letter, ToneGenie adapts to your tone.
          </motion.p>
        </motion.div>

        {/* Cards grid with custom layout */}
        <motion.div 
          className="max-w-4xl mx-auto"
            
        >
          {/* First row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {forwhom.slice(0, 2).map((user, index) => (
              <motion.div
                key={index}
                className="relative group"
                
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center relative overflow-hidden cursor-pointer"
                  style={{ 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(139,92,246,0.2)",
                    borderColor: "rgba(139,92,246,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-violet-500/8 opacity-0 group-hover:opacity-100 rounded-2xl"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full rounded-2xl"
                    style={{ transform: 'skewX(-20deg)' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  <motion.div 
                    className="text-4xl mb-4 relative z-10"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {user.emoji}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-white font-semibold text-lg relative z-10"
                    whileHover={{ 
                      color: "#a855f7"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {user.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {forwhom.slice(2, 6).map((user, index) => (
              <motion.div
                key={index + 2}
                className="relative group"
                
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center relative overflow-hidden cursor-pointer"
                  style={{ 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(139,92,246,0.2)",
                    borderColor: "rgba(139,92,246,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 rounded-2xl"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full rounded-2xl"
                    style={{ transform: 'skewX(-20deg)' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  <motion.div 
                    className="text-4xl mb-4 relative z-10"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {user.emoji}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-white font-semibold text-lg relative z-10"
                    whileHover={{ 
                      color: "#a855f7"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {user.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Third row - 1 centered card */}
          <div className="flex  justify-center">
            <motion.div
              className="relative group w-full max-w-xs"
              
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center relative overflow-hidden cursor-pointer"
                style={{ 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(139,92,246,0.2)",
                  borderColor: "rgba(139,92,246,0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 rounded-2xl"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full rounded-2xl"
                  style={{ transform: 'skewX(-20deg)' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="text-4xl mb-4 relative z-10"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {forwhom[6].emoji}
                </motion.div>
                
                <motion.h3 
                  className="text-white font-semibold text-lg relative z-10"
                  whileHover={{ 
                    color: "#a855f7"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {forwhom[6].title}
                </motion.h3>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Who_is_it_for