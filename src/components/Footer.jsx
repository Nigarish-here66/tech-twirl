import React from "react";
import styles from "../Css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left Section */}
      <div className={`${styles.footerSection} ${styles.footerLeft}`}>
        <img
          src="../assets/logo.png"
          alt="TechTwril"
          className={styles.footerLogo}
        />
        <p className={styles.footerDescription}>
          Providing software development services and support to clients all over
          the world.
        </p>

        <div className={styles.footerRating}>
          <span className={styles.ratingValue}>5.0</span>
          <span>Based on 1 Clutch review</span>
        </div>

        <div className={styles.footerContact}>
          <p><strong>Phone (PK):</strong> +92 3035983135</p>
          <p><strong>Phone (UK):</strong> +44 7466 109725</p>
          <p><strong>Email:</strong> info@xytex.com</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className={`${styles.footerSection} ${styles.footerMiddle}`}>
        <div className={styles.addressBlock}>
          <h4>Pakistan, PK</h4>
          <p>Wah, Pakistan</p>
          <p>Minar road, Lala Rukh St, Wah Cantt 47040</p>
        </div>

        <div className={styles.addressBlock}>
          <h4>United Kingdom</h4>
          <p>A29 Bradford, UK</p>
          <p>7 Horsnabb Gardens, Bradford BD7 4QR, UK</p>
        </div>

        <div className={styles.addressBlock}>
          <h4>Dubai, AE</h4>
          <p>Dubai, UAE</p>
          <p>Finance Cluster, Pavilion Mall, P045, International City</p>
          <p>+971 52201 9994</p>
        </div>
      </div>

      {/* Right Section */}
      <div className={`${styles.footerSection} ${styles.footerRight}`}>
        <h4>Get In Touch</h4>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
