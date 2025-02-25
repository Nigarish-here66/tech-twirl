import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="top-header">
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default Header;