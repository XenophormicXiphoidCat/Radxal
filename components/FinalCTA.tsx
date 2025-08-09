'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FinalCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-800/10 to-primary-950/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glassmorphic-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Choose your path and join the future of AI-powered work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Find Talent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glass-card-hover p-8 text-center group"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🔍
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">
              Find Talent
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Connect with elite AI, no-code, and automation experts who can bring your vision to life.
            </p>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="button-primary w-full"
            >
              Start Your Project
            </button>
          </motion.div>

          {/* Join as Freelancer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card glass-card-hover p-8 text-center group"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">
              Join as Freelancer
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Join our network of elite specialists and work on high-impact projects with premium clients.
            </p>
            <button
              onClick={() => scrollToSection('for-freelancers')}
              className="button-primary w-full"
            >
              Join Our Network
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
