'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Define Your Project",
      description: "Tell us about your project requirements, timeline, and budget. Our AI analyzes your needs to find the perfect match."
    },
    {
      number: "02",
      title: "AI Matching",
      description: "Our advanced algorithms scan thousands of qualified professionals to find the best fit for your specific project."
    },
    {
      number: "03",
      title: "Connect & Collaborate",
      description: "Get introduced to your matched expert, review their portfolio, and start collaborating immediately."
    }
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 via-primary-800/10 to-primary-950/30"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-white/8 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/6 rotate-45"
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
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
            How It Works
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 blur-lg"
              animate={isInView ? {
                opacity: [0, 0.2, 0],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Three simple steps to connect with the perfect AI and automation expert
          </motion.p>
        </motion.div>

        {/* Enhanced timeline */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Timeline connector for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Enhanced step number */}
              <motion.div
                className="w-20 h-20 mx-auto mb-8 glass-card flex items-center justify-center text-3xl font-bold text-white relative z-10 rounded-2xl group"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  y: -3
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 300
                }}
              >
                <span className="relative z-10">{step.number}</span>
                
                {/* Enhanced hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>

              {/* Enhanced content card */}
              <div className="glass-card p-8 h-full relative overflow-hidden rounded-2xl group">
                {/* Enhanced hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-semibold mb-4 text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
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
                  <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-lg"></div>
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-3 right-3 w-1 h-1 bg-white/40 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                />
                <motion.div
                  className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white/25 rounded-full"
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.25, 0.7, 0.25],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8,
                  }}
                />
              </div>

              {/* Timeline connector for mobile */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="lg:hidden w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto my-6"
                  initial={{ height: 0, opacity: 0 }}
                  animate={isInView ? { height: 64, opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg text-text-secondary mb-6"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Ready to get started? Join thousands of businesses already using Rodium
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
