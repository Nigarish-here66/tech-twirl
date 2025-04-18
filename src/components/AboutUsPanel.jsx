import React from 'react';
import '../styles/AboutUsPanel.css'; // Regular CSS import
import '@fortawesome/fontawesome-free/css/all.min.css';


const AboutUsPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="panel">
        <button className="closeButton" onClick={onClose}>&times;</button>

        <h2 className="sectionTitle">About Us</h2>
        <p className="description">
          We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.
        </p>

        <h2 className="sectionTitle">Contact</h2>
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Subject" />
          <select className="select"> 
            <option>Open This To Select Service</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Design</option>
          </select>
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contacts">
        <a href="tel:+923095930315">+923097487395</a><br />
        <a href="tel:+447596341265">+448928399965</a>
        </div>

        <div className="email">
        <a href="mailto:info@exytex.com">info@techtwirl.com</a>
        </div>

        <div className="socialIcons">
        <a href="#https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="#https://twitter-cl.vercel.app/login"><i className="fab fa-twitter"></i></a>
        <a href="#https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a href="#https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPanel;
