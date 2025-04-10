import React from "react";
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaChartBar, FaApple, FaAndroid } from "react-icons/fa";
import "../styles/OurServices.css";
import { Link } from "react-router-dom";

const services = [
  { title: "Web Development", description: "We create and develop sites with high conversion, which are easy to bring to the TOP.", icon: <FaLaptopCode /> },
  { title: "Mobile App", description: "We conduct competitive market analysis and implement user-friendly mobile applications.", icon: <FaMobileAlt /> },
  { title: "Digital Marketing", description: "Increase sales through search engine positioning and other digital channels.", icon: <FaBullhorn /> },
  { title: "ERP Software Development", description: "Integrate enterprise business process management systems with our expertise.", icon: <FaChartBar /> },
  { title: "iOS App Development", description: "Develop high-quality iOS applications following Apple's guidelines.", icon: <FaApple /> },
  { title: "Android App Development", description: "Create powerful Android applications tailored for the market leader platform.", icon: <FaAndroid /> },
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-title-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-animated-underline">
          <div className="services-underline-dot"></div>
        </div>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/services" className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
