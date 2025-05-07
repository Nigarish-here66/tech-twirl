import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // ✅ Regular CSS import
import logo from '../assets/logo.png';
import AboutUsPanel from './AboutUsPanel';
import Admin from '../pages/Admin';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="headerContainer">
          <div className="logoContainer">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className={scrolled ? 'shrinkLogo' : ''} />
            </Link>
          </div>

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

          <div className="ctaButton">
            <li className="navItem">
              <Link to="/admin" className="navLink">Admin</Link></li>
            <li></li>
            <button onClick={() => setShowPanel(true)} className="hireUsButton">
              Hire Us
            </button>
          </div>
        </div>
      </header>
      <AboutUsPanel isOpen={showPanel} onClose={() => setShowPanel(false)} />
    </>
  );
};

export default Header;