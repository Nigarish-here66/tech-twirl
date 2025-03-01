import { useState } from "react";
import { FaTimes, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import "../styles/HireUs.css";

const HireUs = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`side-panel ${isOpen ? "open" : "hidden"}`}>
      <button className="close-button" onClick={() => setIsOpen(false)}>
        <FaTimes size={24} />
      </button>
      
      <h2 className="title">About Us</h2>
      <p className="description">
        We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.
      </p>

      <h3 className="subtitle">Contact</h3>
      <input type="text" placeholder="Your Name" className="input-field" />
      <input type="email" placeholder="Your Email" className="input-field" />
      <input type="text" placeholder="Your Subject" className="input-field" />
      <select className="select-field">
        <option>Open This To Select Service</option>
        <option>Mobile App</option>
        <option>Digital Marketing</option>
        <option>Web Development</option>
        <option>SEO Services</option>
        <option>Graphic Designing</option>
        <option>Amazon Service</option>
        <option>Shopify</option>
      </select>
      <textarea placeholder="Your Message" className="textarea-field"></textarea>
      <button className="send-button">Send Message</button>
      
      <div className="contact-info">
        <p className="phone-number">+9234567890576</p>
      </div>

      <div className="email-info">
        <p className="email">info@techtwirl.com</p>
      </div>

      <div className="social-icons">
        <FaFacebook className="icon" size={20} />
        <FaTwitter className="icon" size={20} />
        <FaInstagram className="icon" size={20} />
        <FaPinterest className="icon" size={20} />
      </div>
    </div>
  );
}
export default HireUs;