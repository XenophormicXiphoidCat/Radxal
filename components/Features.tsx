'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Matching",
      description: "Advanced algorithms connect you with the perfect talent based on skills, experience, and project requirements.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Get matched with qualified professionals in minutes, not days. Streamline your hiring process.",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: "🛡️",
      title: "Quality Assured",
      description: "Every freelancer is vetted and verified. Only top-tier talent makes it to your project.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Access talent from around the world. Find specialized experts regardless of location.",
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ]

  return (
    <section id="features" ref={ref} className="py-24 bg-primary-900/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/8 to-white/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-white/6 to-white/2 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-white/4 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-white/3 rounded-lg blur-xl"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 glassmorphic-heading relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Why Choose Radxal?
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 blur-lg"
              animate={isInView ? {
                opacity: [0, 0.2, 0],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Experience the future of freelancer-client matchmaking with our cutting-edge platform
          </motion.p>
        </motion.div>

        {/* Enhanced features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Enhanced glass card */}
              <div className="glass-card glass-card-hover h-full p-8 text-center relative overflow-hidden rounded-2xl">
                {/* Enhanced hover effect overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Enhanced icon with floating animation */}
                <motion.div
                  className="text-6xl mb-6 relative z-10"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, 0],
                    y: -5
                  }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Enhanced content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-semibold mb-4 text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ 
                    boxShadow: "0 0 40px rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                  }}
                />

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-lg"></div>
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-2 right-2 w-1 h-1 bg-white/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white/20 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
