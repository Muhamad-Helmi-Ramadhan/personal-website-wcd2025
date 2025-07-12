import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const sections = ['about', 'journey', 'work', 'contact'];

// Reusable NavLink Component
const NavLink = ({ label, isActive, onClick }) => (
  <button
    className={`nav-link ${isActive ? 'active' : ''}`}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}
    tabIndex="0"
    role="link"
    aria-current={isActive ? 'page' : undefined}
  >
    {label.toUpperCase()}
  </button>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef();

  // Smooth scroll handler
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }, []);

  // Scroll logic
  useEffect(() => {
    let throttleTimeout = null;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 50);
      setLastScrollY(currentY);

      // Section highlighting
      let current = '';
      for (const id of sections) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= currentY + 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const throttledScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 150);
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [lastScrollY]);

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          className={`navbar ${menuOpen ? 'menu-open' : ''}`}
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="navbar-container" ref={menuRef}>
            {/* Logo */}
            <div
              className="navbar-logo"
              onClick={() => scrollToSection('top')}
              role="button"
              tabIndex="0"
              aria-label="Go to top"
              onKeyDown={(e) => {
                if (e.key === 'Enter') scrollToSection('top');
              }}
            >
              <img src="/book.png" alt="Logo" className="navbar-sensei" />
            </div>

            {/* Navigation Links */}
            <div
              className={`navbar-links ${menuOpen ? 'open' : ''}`}
              role="navigation"
              aria-label="Main menu"
              aria-expanded={menuOpen}
            >
              {sections.map((section) => (
                <NavLink
                  key={section}
                  label={section}
                  isActive={activeSection === section}
                  onClick={() => scrollToSection(section)}
                />
              ))}
            </div>

            {/* Hamburger Toggle */}
            <button
              className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
