'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CaseStudies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const caseStudies = [
    {
      icon: "🤖",
      title: "AI-Powered Customer Service",
      company: "TechCorp Inc.",
      description: "Automated customer support system handling 10,000+ daily inquiries with 95% satisfaction rate.",
      results: ["40% cost reduction", "24/7 availability", "Instant response times"]
    },
    {
      icon: "📊",
      title: "Data Pipeline Automation",
      company: "DataFlow Solutions",
      description: "End-to-end data processing automation reducing manual work by 80% and improving accuracy.",
      results: ["80% time savings", "99.9% accuracy", "Real-time insights"]
    },
    {
      icon: "🛒",
      title: "E-commerce Optimization",
      company: "ShopSmart Retail",
      description: "AI-driven recommendation engine increasing conversion rates and customer lifetime value.",
      results: ["35% conversion boost", "25% revenue increase", "Enhanced UX"]
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-800/10 to-primary-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glassmorphic-heading">
            Case Studies
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card glass-card-hover p-8 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {study.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-2 text-text-primary">
                {study.title}
              </h3>
              
              <p className="text-white/80 font-medium mb-4">
                {study.company}
              </p>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {study.description}
              </p>
              
              <div className="space-y-2">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-white/30 rounded-full mr-3"></div>
                    {result}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
