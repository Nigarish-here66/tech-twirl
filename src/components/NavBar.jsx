import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="header">
      <div className="logo">
        {/* <img src="logo.png" alt="Exytex Logo" className="logo-img" /> */}
        <span className="logo-text">TechTwirl</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="hire-button">Hire Us</button>
    </nav>
  );
};

export default NavBar;

