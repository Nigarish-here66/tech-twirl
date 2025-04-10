import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./HeroSection/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate("/services"); 
  };

  return (
    <div className="hero-section">
      <div className="hero-slider"></div>
      <div className="hero-content">
        <h1 className="fade-in">We Can Solve Your Business Needs</h1>
        <p className="fade-in">We provide a twofold increase in traffic in 6 months.</p>
        <button className="hero-button" onClick={handleButtonClick}>
          Get Details
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
