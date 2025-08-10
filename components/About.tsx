'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 bg-primary-900/20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-800/10 via-primary-900/5 to-primary-950/20"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border border-white/8 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 border border-white/6 rotate-45"
          animate={{
            rotate: [45, 135, 225, 315, 405],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/4 rounded-lg"
          animate={{
            y: [0, -25, 0],
            opacity: [0.03, 0.12, 0.03],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 glassmorphic-heading relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            About Radxal
            {/* Enhanced glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/15 opacity-0 blur-xl"
              animate={isInView ? {
                opacity: [0, 0.3, 0],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.h2>
        </motion.div>

        {/* Enhanced content card */}
        <motion.div
          className="glass-card p-12 rounded-3xl relative overflow-hidden group"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ 
            duration: 1, 
            delay: 0.4, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ y: -5, scale: 1.01 }}
        >
          {/* Enhanced hover effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          {/* Enhanced border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700"
            whileHover={{ 
              boxShadow: "0 0 60px rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(255, 255, 255, 0.5)",
            }}
          />

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-700">
            <div className="absolute top-8 right-8 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/20 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/15 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.p
              className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Radxal is revolutionizing how businesses connect with AI, no-code, and automation experts. 
              We believe that every company deserves access to world-class talent, regardless of their size or location.
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Our mission is to democratize access to specialized expertise, making it easier than ever for 
              visionary businesses to bring their AI-powered ideas to life. Through intelligent matching, 
              quality assurance, and seamless collaboration tools, we're building the future of work.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <motion.span
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                AI & Machine Learning
              </motion.span>
              <motion.span
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                No-Code Development
              </motion.span>
              <motion.span
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                Process Automation
              </motion.span>
              <motion.span
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                Data Analytics
              </motion.span>
            </motion.div>
          </div>

          {/* Floating particles */}
          <motion.div
            className="absolute top-6 right-6 w-2 h-2 bg-white/40 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/30 rounded-full"
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-8 w-1 h-1 bg-white/25 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-1/2 left-8 w-0.5 h-0.5 bg-white/20 rounded-full"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About
