import { useState } from "react";
import { FaTimes, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import "../styles/HireUs.css";

const HireUs = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await fetch("http://localhost:5000/api/hireus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          service: "",
          message: "",
        }); // Reset form
      } else {
        alert("Error sending message");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("There was an error. Please try again later.");
    }
  };

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
      
      {/* Form with handleSubmit */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input-field"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          className="input-field"
          value={formData.subject}
          onChange={handleChange}
        />
        <select
          name="service"
          className="select-field"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Open This To Select Service</option>
          <option value="Mobile App">Mobile App</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Web Development">Web Development</option>
          <option value="SEO Services">SEO Services</option>
          <option value="Graphic Designing">Graphic Designing</option>
          <option value="Amazon Service">Amazon Service</option>
          <option value="Shopify">Shopify</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea-field"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="send-button">Send Message</button>
      </form>
      
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
};

export default HireUs;
// import { useState } from "react";
// import { FaTimes, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
// import "../styles/HireUs.css";

// const HireUs = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`side-panel ${isOpen ? "open" : "hidden"}`}>
//       <button className="close-button" onClick={() => setIsOpen(false)}>
//         <FaTimes size={24} />
//       </button>
      
//       <h2 className="title">About Us</h2>
//       <p className="description">
//         We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.
//       </p>

//       <h3 className="subtitle">Contact</h3>
//       <input type="text" placeholder="Your Name" className="input-field" />
//       <input type="email" placeholder="Your Email" className="input-field" />
//       <input type="text" placeholder="Your Subject" className="input-field" />
//       <select className="select-field">
//         <option>Open This To Select Service</option>
//         <option>Mobile App</option>
//         <option>Digital Marketing</option>
//         <option>Web Development</option>
//         <option>SEO Services</option>
//         <option>Graphic Designing</option>
//         <option>Amazon Service</option>
//         <option>Shopify</option>
//       </select>
//       <textarea placeholder="Your Message" className="textarea-field"></textarea>
//       <button className="send-button">Send Message</button>
      
//       <div className="contact-info">
//         <p className="phone-number">+9234567890576</p>
//       </div>

//       <div className="email-info">
//         <p className="email">info@techtwirl.com</p>
//       </div>

//       <div className="social-icons">
//         <FaFacebook className="icon" size={20} />
//         <FaTwitter className="icon" size={20} />
//         <FaInstagram className="icon" size={20} />
//         <FaPinterest className="icon" size={20} />
//       </div>
//     </div>
//   );
// }
// export default HireUs;
