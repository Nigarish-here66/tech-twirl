import React from "react";
import "../styles/Card.css";
import serviceImage from "../assests/laptop-image.png"; 

const Card = () => {
  return (
    <div className="service-container">
      <div className="service-content">
        <h2>Software Development Services</h2>
        <p className="service-text">
          Because we really love and feel passion for what we do. We always seek the benefit 
          and satisfaction of our clients, through personalized advice and quality in all our 
          developments. Our web developers work in a single office space and are a well-coordinated 
          team. As a leading Software house in Pakistan, We provide clients with all types of 
          services for website creation, increase SEO traffic, conversion optimization Logos and 
          Icons, and Internet resources modernization. Our software house mission is spreading 
          the best services in the industry of online market.
        </p>
        
      </div>
      <div className="service-image-container">
        <img 
          src={serviceImage} 
          alt="Software Development Services" 
          className="service-image"
        />
      </div>
    </div>
  );
};

export default Card;
