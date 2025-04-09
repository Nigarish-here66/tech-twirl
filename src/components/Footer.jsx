import React from "react";
import "../styles/Footer.css"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>A forward-thinking software company specializing in innovative digital solutions that drive growth and efficiency</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">💻</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} TechTwirl. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
