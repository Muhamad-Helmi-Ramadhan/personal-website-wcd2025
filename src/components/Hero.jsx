import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollToWork = (e) => {
    e.preventDefault()
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section">
      <div className="blob"></div>

      <motion.div 
        className="hero-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-text">
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Muhamad Helmi Ramadhan
          </motion.h1>

          <motion.h2 
          className="hero-tagline typewriter"
          transition={{ delay: 0.6 }}
          >
          More Than a Teacher,<br />
          A Guide in Your Journey
          </motion.h2>

          <p className="hero-subtitle">
            Empowering minds, building character, and walking with purpose.
          </p>

          <motion.a 
            href="#work"
            className="hero-button"
            onClick={scrollToWork}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 View My Work
          </motion.a>
        </div>

        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
