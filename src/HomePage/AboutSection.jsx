import React from "react";
import "../styles/AboutSection.css"; 

// Functional React component for the About Section
const AboutSection = () => {
  return (
    
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-image">
          <img
            src="https://www.webdesigncompany.lk/images/services/creative-2-software-development-outsourcing-company-in-sri-lanka.gif"
            alt="TechTwirl Logo" // Descriptive alt text for accessibility
          />
        </div>

        {/* Content section for text-based information */}
        <div className="about-content">
          <div className="heading-container">
            <h2>Top Software House In Pakistan</h2>
            <div className="animated-underline">
              <div className="underline-dot"></div> 
            </div>
          </div>

          {/* Paragraphs describing the company and its services */}
          <p>
            TechTwirl technologies is an IT Software Company currently working in Pakistan.
            We provide services for <strong>professional web development</strong>,
            Graphic Designing, Digital Marketing, and mobile applications.
          </p>
          <p>
            We create a unique web design and corporate identity, as well as promote
            websites and conduct a comprehensive advertising campaign. TechTwirl technologies is a top
            software house in Pakistan registered by PSEB and also the best web applications
            and software Development Company in Pakistan. Our main advantage is that you can
            go through the entire process of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
