import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'; 
import logo from '../assets/logo.png'; 
import AboutUsPanel from './AboutUsPanel'; 

// checking jenkins
const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // Effect hook to monitor window scroll and update `scrolled` state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);

  return (
    <>
      {/* Header element with conditional 'scrolled' class based on scroll position */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="headerContainer">

          {/* Logo Section */}
          <div className="logoContainer">
            <Link to="/" className="logo">
              
              {/* Logo shrinks when scrolled */}
              <img src={logo} alt="Logo" className={scrolled ? 'shrinkLogo' : ''} />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="navigation">
            <ul className="navList">
              <li className="navItem">
                <Link to="/" className="navLink">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/services" className="navLink">Services</Link>
              </li>
              <li className="navItem">
                <Link to="/portfolio" className="navLink">Portfolio</Link>
              </li>
              <li className="navItem">
                <Link to="/team" className="navLink">Team</Link>
              </li>
              <li className="navItem">
                <Link to="/contact" className="navLink">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* CTA (Call To Action) Section: Admin link and "Hire Us" button */}
          <div className="ctaButton">
            <li className="navItem">
              <Link to="/admin" className="navLink">Admin</Link>
            </li>
            <li></li> 
            <button 
              onClick={() => setShowPanel(true)} 
              className="hireUsButton"
            >
              Hire Us
            </button>
          </div>
        </div>
      </header>

      {/* Render AboutUsPanel conditionally when `showPanel` is true */}
      <AboutUsPanel isOpen={showPanel} onClose={() => setShowPanel(false)} />
    </>
  );
};

export default Header;
