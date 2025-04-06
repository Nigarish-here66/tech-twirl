import React from "react";
import "../styles/HeroSection.module.css"; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-slider"></div>
      <div className="hero-content">
        <h1 className="fade-in">We Can Solve Your Business Needs</h1>
        <p className="fade-in">We provide a twofold increase in traffic in 6 months.</p>
        <button className="hero-button">Get Details</button>
      </div>
    </div>
  );
};

export default HeroSection;
