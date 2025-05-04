import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import AboutUsPanel from './AboutUsPanel';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsAdminLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminLoggedIn(false);
    navigate('/login');
  };

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
              <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
              <li className="navItem"><Link to="/services" className="navLink">Services</Link></li>
              <li className="navItem"><Link to="/portfolio" className="navLink">Portfolio</Link></li>
              <li className="navItem"><Link to="/team" className="navLink">Team</Link></li>
              <li className="navItem"><Link to="/contact" className="navLink">Contact</Link></li>

              <li className="navItem">
                {isAdminLoggedIn ? (
                  <>
                    <Link to="/admin" className="navLink">Dashboard</Link>
                    <button onClick={handleLogout} className="navLink logoutButton">Logout</button>
                  </>
                ) : (
                  <Link to="/login" className="navLink">Admin</Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="ctaButton">
            <button onClick={() => setShowPanel(true)} className="hireUsButton">Hire Us</button>
          </div>
        </div>
      </header>

      <AboutUsPanel isOpen={showPanel} onClose={() => setShowPanel(false)} />
    </>
  );
};

export default Header;
