import React, { useState } from "react";
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaDatabase, FaApple, FaAndroid } from "react-icons/fa";
import "../styles/OurServices.css"

const servicesData = [
  { id: 1, icon: <FaLaptopCode />, title: "Web Development", description: "We create and develop sites with high conversion, which are easy to bring to the TOP. We fully manage the project or help the team on the client-side." },
  { id: 2, icon: <FaMobileAlt />, title: "Mobile App", description: "We conduct competitive market analysis, use the best solutions to create Mobile Apps. We implement business tasks using user-friendly interfaces based on analytics." },
  { id: 3, icon: <FaBullhorn />, title: "Digital Marketing", description: "We help you increase the sales of your product or service through a digital strategy of search engine positioning and other channels so that you obtain the best results." },
  { id: 4, icon: <FaDatabase />, title: "ERP Software Development", description: "Enterprise resource and our team of IT specialists have extensive practical experience in creating first-class solutions for integrating enterprise business process management systems." },
  { id: 5, icon: <FaApple />, title: "iOS App Development", description: "Creation of applications for iOS. The difficulty of developing applications for iOS is that Apple dictates its own rules in design and functionality." },
  { id: 6, icon: <FaAndroid />, title: "iOS / Android App Development", description: "Find out how we develop apps for Android, a platform that has already become a market leader. We will tell you what stages the development of Android applications goes through." },
];

const OurServices = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="animated-underline">
        <div className="underline-dot"></div>
      </div>
      
      <div className="services-grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`service-card ${activeId === service.id ? "active" : ""}`}
            onClick={() => setActiveId(service.id)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title-text">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <span className="read-more">Read More</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
