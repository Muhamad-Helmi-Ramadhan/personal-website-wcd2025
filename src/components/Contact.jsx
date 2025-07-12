import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './Contact.css';

const SERVICE_ID = 'service_b8mpgte';       // ← Ganti sesuai milikmu
const TEMPLATE_ID = 'template_z2t0o0o';     // ← Ganti sesuai milikmu
const PUBLIC_KEY = '6OzReqOZ5_jREZhzN';  // ← Ganti sesuai milikmu

const Contact = () => {
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSuccessMessage('Thank you! Your message has been sent.');
        setForm({ from_name: '', from_email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error.text || error);
        setErrorMessage('Oops! Something went wrong. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      {/* Animated Background */}
      <motion.div className="decorative-sensei sensei-top-right" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>📖</motion.div>
      <motion.div className="decorative-sensei sensei-bottom-left" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>𝄞</motion.div>
      <motion.div className="decorative-sensei sensei-top-left" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>🎤︎︎</motion.div>
      <motion.div className="decorative-sensei sensei-bottom-right" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>♪♬</motion.div>

      <div className="contact-container">
        <motion.h2 className="contact-title visible" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          CONTACT ME
        </motion.h2>
        <motion.p className="contact-subtitle visible" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          I’m looking forward to hearing from you soon!
        </motion.p>

        <motion.form className="contact-form visible" onSubmit={onSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={form.from_name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={form.from_email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className={`submit-button ${isSending ? 'loading' : ''}`} disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message 📩'}
          </button>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
