import React from "react";
import styles from '../styles/Footer.css';
const Footer = () => {
  // Coordinates for your location (Karachi)
  const latitude = 24.8790;
  const longitude = 67.0425;
  
  // Google Maps embed URL with your coordinates
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4456187449853!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzQ0LjQiTiA2N8KwMDInMzMuMyJF!5e0!3m2!1sen!2s!4v1597245677269!5m2!1sen!2s`;

  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Get New Updates</h4>
        <div className="subscribe-container">
          <input type="email" placeholder="Enter your Email*" />
          <button>Subscribe</button>
        </div>
        <p>Stay informed with our latest news and exclusive content.</p>
      </div>

      <div className="midFooter">
        <h1>Tech Twirl</h1>
        <p>Where Quality Meets Innovation.</p>
        <p>© 2025 . All Rights Reserved.</p>
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="rightFooter">
        <h4>Our Location</h4>
        {/* Google Maps embed iframe */}
        <iframe 
          src={googleMapsEmbedUrl}
          width="100%" 
          height="200" 
          style={{
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
          }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Tech Twirl Location"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
