'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-primary-800/20 to-primary-950/40"></div>
      
      {/* Animated background shapes with better positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-white/8 to-white/3 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-32 w-32 h-32 bg-gradient-to-br from-white/6 to-white/2 rounded-lg blur-2xl rotate-45"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.25, 0.08],
            rotate: [45, 90, 45],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-28 h-28 bg-gradient-to-br from-white/5 to-white/2 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.2, 0.05],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-white/7 to-white/3 rounded-lg blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.12, 0.28, 0.12],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/4 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-12 h-12 bg-white/3 rounded-lg blur-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
      </div>

      {/* Main content with enhanced animations */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 glassmorphic-heading relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where AI Meets Talent
            {/* Enhanced text glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 blur-xl"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Rodium connects visionary businesses with elite AI, no-code, and automation experts — 
            delivering flawless projects every time.
          </motion.p>
        </motion.div>

        {/* Enhanced floating elements around text */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <motion.div
            className="absolute -top-20 -left-20 w-2 h-2 bg-white/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -top-16 -right-16 w-1.5 h-1.5 bg-white/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-16 w-1 h-1 bg-white/25 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
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
            className="absolute -bottom-16 -right-20 w-1.5 h-1.5 bg-white/15 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.5, 0.15],
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

