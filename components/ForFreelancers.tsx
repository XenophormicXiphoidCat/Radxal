'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ForFreelancers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: "💼",
      title: "Premium Projects",
      description: "Access high-value clients and projects that match your expertise.",
      color: "from-white/10 to-white/5"
    },
    {
      icon: "🚀",
      title: "Streamlined Onboarding",
      description: "Quick verification process gets you started with high-value projects faster.",
      color: "from-white/8 to-white/3"
    },
    {
      icon: "⭐",
      title: "Grow Your Reputation",
      description: "Build your portfolio with diverse projects and expand your professional network.",
      color: "from-white/6 to-white/2"
    }
  ]

  return (
    <section id="for-freelancers" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-primary-800/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glassmorphic-heading">
            For Freelancers
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Join an elite network of AI and automation specialists
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card glass-card-hover p-8 text-center group relative overflow-hidden"
            >
              {/* Hover background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-text-primary">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button className="button-primary">
            Join Our Network
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ForFreelancers
