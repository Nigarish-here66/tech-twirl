import React, { useState } from 'react';
import '../styles/AboutUsPanel.css'; // Regular CSS import
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutUsPanel = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/hireus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', service: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again later.');
    }
  };

  return (
    <div className="overlay">
      <div className="panel">
        <button className="closeButton" onClick={onClose}>&times;</button>

        <h2 className="sectionTitle">About Us</h2>
        <p className="description">
          We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.
        </p>

        <h2 className="sectionTitle">Contact</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <select
            name="service"
            className="select"
            value={formData.service}
            onChange={handleInputChange}
            required
          >
            <option value="">Open This To Select Service</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Design">Design</option>
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
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
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter-cl.vercel.app/login"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPanel;













// Without backend implementation code:
// import React from 'react';
// import '../styles/AboutUsPanel.css'; // Regular CSS import
// import '@fortawesome/fontawesome-free/css/all.min.css';


// const AboutUsPanel = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="overlay">
//       <div className="panel">
//         <button className="closeButton" onClick={onClose}>&times;</button>

//         <h2 className="sectionTitle">About Us</h2>
//         <p className="description">
//           We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.
//         </p>

//         <h2 className="sectionTitle">Contact</h2>
//         <form className="form">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <input type="text" placeholder="Your Subject" />
//           <select className="select"> 
//             <option>Open This To Select Service</option>
//             <option>Web Development</option>
//             <option>Mobile Development</option>
//             <option>Design</option>
//           </select>
//           <textarea rows="4" placeholder="Your Message"></textarea>
//           <button type="submit">Send Message</button>
//         </form>

//         <div className="contacts">
//         <a href="tel:+923095930315">+923097487395</a><br />
//         <a href="tel:+447596341265">+448928399965</a>
//         </div>

//         <div className="email">
//         <a href="mailto:info@exytex.com">info@techtwirl.com</a>
//         </div>

//         <div className="socialIcons">
//         <a href="#https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
//         <a href="#https://twitter-cl.vercel.app/login"><i className="fab fa-twitter"></i></a>
//         <a href="#https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
//         <a href="#https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AboutUsPanel;
