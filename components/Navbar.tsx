'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' }
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-black/20 backdrop-blur-md'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a 
              href="#home" 
              className="text-2xl font-bold glassmorphic-heading relative overflow-hidden"
            >
              <span className="relative z-10">Radxal</span>
              {/* Logo glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: -100 }}
                whileHover={{ x: 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <motion.a
                  href={item.href}
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg"
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white/60 rounded-full transition-all duration-500 group-hover:w-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              className="relative px-8 py-3 rounded-xl font-semibold text-white overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/10 rounded-xl backdrop-blur-sm border border-white/20"></div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button text */}
              <span className="relative z-10">Get Started</span>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: -100 }}
                whileHover={{ x: 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 text-white/80 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-6 h-6">
              <motion.div
                className="absolute top-0 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-2 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="py-6 space-y-2 border-t border-white/20">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-white/80 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 relative overflow-hidden group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Mobile hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.a>
                ))}
                
                <motion.button
                  className="w-full mt-6 relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Mobile button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/10 rounded-xl backdrop-blur-sm border border-white/20"></div>
                  
                  {/* Mobile button text */}
                  <span className="relative z-10">Get Started</span>
                  
                  {/* Mobile button shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: -100 }}
                    whileHover={{ x: 100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
