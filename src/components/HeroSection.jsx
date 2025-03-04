import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="heroOverlay">
        <h1 className="heroTitle">Software House Portfolio</h1>
        <nav className="heroNav">
          <a href="/" className="heroLink">Home</a>
          <span className="separator">•</span>
          <a href="/projects" className="heroLink">Projects</a>
        </nav>
        <button className="heroButton">Explore Projects</button>
      </div>
    </header>
  );
};

export default HeroSection;
