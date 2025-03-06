import React from "react";
import "../styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn, 
  faGithub 
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footerSection footerLeft">
        <img
          src="../assets/logo.png"
          alt="TechTwril"
          className="footerLogo"
        />
        <p className="footerDescription">
          Providing software development services and support to clients all over the world.
        </p>

        <div className="footerRating">
          <span className="ratingValue">5.0</span>
          <span>Based on 1 Clutch review</span>
        </div>

        <div className="footerContact">
          <p>
            <strong>Phone (PK):</strong> +92 3035983135
          </p>
          <p>
            <strong>Phone (UK):</strong> +44 7466 109725
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@xytex.com">info@xytex.com</a>
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footerSection footerMiddle">
        <div className="addressBlock">
          <h4>Pakistan, PK</h4>
          <p>Wah, Pakistan</p>
          <p>Minar road, Lala Rukh St, Wah Cantt 47040</p>
        </div>

        <div className="addressBlock">
          <h4>United Kingdom</h4>
          <p>A29 Bradford, UK</p>
          <p>7 Horsnabb Gardens, Bradford BD7 4QR, UK</p>
        </div>

        <div className="addressBlock">
          <h4>Dubai, AE</h4>
          <p>Dubai, UAE</p>
          <p>Finance Cluster, Pavilion Mall, P045, International City</p>
          <p>+971 52201 9994</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="footerSection footerRight">
        <h4>Get In Touch</h4>
        <div className="socialLinks">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        
        <div className="registrationInfo">
          <p>© {new Date().getFullYear()} TechTwril. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
