import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Work.css'

const projects = [
  {
    id: 1,
    video: '/pelatihan2023.mp4',
    poster: '/poster1.png',
    title: 'School Arts Events & Performances',
    description: "Involvement in training and choreography for art performances such as graduation ceremonies, Teacher's Day, and interschool competitions. Focused on collaboration, expression, and teamwork discipline."  },
  {
    id: 2,
    image: '/Project2.jpg',
    title: 'Basic Music Training',
    description: "A program for vocal training and introduction to musical instruments for students from elementary to high school. Helps students channel their artistic talents through extracurricular activities and school performances. Focused on developing fundamentals such as rhythm, beat, musical hearing, and coordination."  },
  {
    id: 3,
    image: '/Project3.jpg',
    title: 'Marching Band Showcase🥁',
    description: 'Dokumentasi kegiatan pembinaan marching band di berbagai sekolah, termasuk pelatihan teknik dasar, display lapangan, hingga partisipasi dalam lomba dan event sekolah.'
  },
  {
    id: 4,
    video: '/dance.mp4',
    poster: '/poster2.png',
    title: 'Dance Break to Recharge',
    description: "A light-hearted moment captured during practice, where I danced to lift the students’ spirits and bring fresh energy to the team. These spontaneous moments help strengthen our bond and boost motivation amidst intensive training sessions."  }
]

const Work = () => {
  const [selectedMedia, setSelectedMedia] = useState(null)

  const openModal = (type, src) => {
    setSelectedMedia({ type, src })
    const modal = document.getElementById("mediaModal")
    modal.style.display = "flex"
    if (type === 'video') {
      const video = document.getElementById("modalVideo")
      video.src = src
      video.play()
    }
  }

  const closeModal = () => {
    const modal = document.getElementById("mediaModal")
    modal.style.display = "none"
    if (selectedMedia?.type === 'video') {
      const video = document.getElementById("modalVideo")
      video.pause()
      video.currentTime = 0
      video.src = ''
    }
    setSelectedMedia(null)
  }

  return (
    <section className="work" id="work">
      <motion.h2
        className="work-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        MY WORK
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.3,
              duration: 0.8,
              ease: 'backOut'
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              rotate: 3,
              boxShadow: '0 20px 50px rgba(14, 92, 156, 0.6)',
              transition: { duration: 0.4, ease: 'easeInOut' }
            }}
          >
            <div
              className={`project-image ${project.image || project.video ? '' : 'fallback'}`}
              onClick={() => {
                if (project.video) openModal('video', project.video)
                else if (project.image) openModal('image', project.image)
              }}
              style={{ cursor: (project.image || project.video) ? 'pointer' : 'default' }}
            >
              {project.video ? (
                <video
                  src={project.video}
                  poster={project.poster}
                  muted
                  loop
                  playsInline
                  className="project-video-thumb"
                />
              ) : project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <span>{project.icon}</span>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </div>
<div
  id="mediaModal"
  className="modal"
  onClick={(e) => {
    if (e.target.id === 'mediaModal') closeModal()
  }}
>
  <div className="modal-content">
    <span className="close" onClick={closeModal}>&times;</span>
    {selectedMedia?.type === 'video' ? (
      <video
        src={selectedMedia.src}
        muted
        loop
        playsInline
        controls
        autoPlay
        className="project-video-thumb"
        style={{ maxWidth: '90%', maxHeight: '80vh', borderRadius: '12px' }}
      />
    ) : selectedMedia?.type === 'image' ? (
      <img src={selectedMedia.src} alt="Preview" style={{ width: '100%' }} />
    ) : null}
    
  </div>
</div>
    </section>
  )
}

export default Work
