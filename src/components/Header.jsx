
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../styles/Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.svg" alt="Tech Twirl" />
            <span>Tech Twirl</span>
          </Link>
        </div>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/services" className={styles.navLink}>Services</Link>
            </li>
            
            <li className={styles.navItem}>
              <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/team" className={styles.navLink}>Team</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.ctaButton}>
          <Link to="/hire-us" className={styles.hireUsButton}>Hire Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
