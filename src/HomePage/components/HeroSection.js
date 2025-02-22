import React, { useState, useEffect } from "react";
import "./HeroSection.css"; // Ensure this contains hero section styles

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("We Can Solve Your Business Needs");
  const [currentSubText, setCurrentSubText] = useState("We provide a twofold increase in traffic in 6 months.");
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    {
      heading: "We Can Solve Your Business Needs",
      subText: "We provide a twofold increase in traffic in 6 months.",
    },
    {
      heading: "Innovative Solutions for Your Business",
      subText: "Our team delivers cutting-edge technology solutions.",
    },
    {
      heading: "Boost Your Online Presence",
      subText: "We help you grow your business with effective strategies.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Hide text before changing
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * texts.length);
        setCurrentText(texts[randomIndex].heading);
        setCurrentSubText(texts[randomIndex].subText);
        setIsVisible(true); // Show text after changing
      }, 500); // Delay to match CSS transition
    }, 9000); // Change text every 9 seconds (same as background animation)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-slider"></div>
      <div className="hero-content">
        <h1 className={isVisible ? "fade-in" : "fade-out"}>{currentText}</h1>
        <p className={isVisible ? "fade-in" : "fade-out"}>{currentSubText}</p>
        <button className="hero-button">Get Details</button>
      </div>
    </div>
  );
};

export default HeroSection;
