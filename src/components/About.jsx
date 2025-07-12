import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="about-container">
      <motion.div
      className="about-image"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-pic">
      <img src="/profil.png" alt="Helmi" className="profile-img" />
      </div>
      </motion.div>

        {/* Content Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
           I’m a Data Science student with a UTBK score of 564, driven by a strong passion for education — especially in the field of music. For years, I’ve been actively involved as a marching band coach across all educational levels, from elementary to high school, and even in Islamic boarding schools.
            <br /><br />
            Beyond music, I also serve as a companion teacher for students with intellectual disabilities (Tunagrahita) at a Special Needs School. By applying adaptive and cognitive methods, I strive to make every learning session enjoyable and meaningful — helping each student grow at their own pace.
            <br /><br />
           I also provide private tutoring for students who face challenges in their academic subjects and offer special coaching packages for competitions and public performances. Teaching, mentoring, and watching others improve have become my biggest motivation on this journey.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
