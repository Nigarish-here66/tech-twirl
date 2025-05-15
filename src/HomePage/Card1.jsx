import React from "react";
import "../styles/Card1.css"; 

// Functional component for displaying a card about software application development
const Card1 = () => {
  return (
   
    <div className="service-container">
    
      <div className="service-image-container">
        <img 
          src="https://www.cyanous.com/img/ourtechnologies.gif" 
          alt="Top Software Application Development" 
          className="service-image" 
        />
      </div>

      {/* Text content section on the right side */}
      <div className="service-content">
        <h2>Top Software Application Development</h2>
        
        <p className="service-text">
          API development and iOS app development all in one place — 
          without sacrificing quality or going through the hassle of switching SEO contractors. 
          If your company needs a new website, an online store redesign, or a custom application, 
          you’ve come to the right place. At Exytex Technologies, we are specialists in software programming. 
          We develop solutions of all sizes, tailored to your needs and budget. Additionally, 
          our deep experience in digital marketing services gives our clients a major advantage, 
          as every project we deliver is designed for online success.
        </p>
      </div>
    </div>
  );
};

export default Card1; 
