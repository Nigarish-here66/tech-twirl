import React from "react";
import styles from "../styles/Teams.module.css";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import clutch from "../assets/clutch.png";
import trustpilot from "../assets/trustpilot.png";
import shopify from "../assets/shopify.png";
import manifest from "../assets/manifest.png";
const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.logoRow}>
        <a href="https://clutch.co/profile/elexoft-technologies" target="_blank" rel="noopener noreferrer">
          <img src={clutch} alt="Clutch" />
        </a>

        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={google} alt="Google Reviews" />
        </a>

        <a href="https://www.trustpilot.com/review/elexoft.com" target="_blank" rel="noopener noreferrer">
          <img src={trustpilot} alt="TrustPilot" />
        </a>

        <a href="https://themanifest.com/company/elexoft-technologies" target="_blank" rel="noopener noreferrer">
          <img src={manifest} alt="The Manifest" />
        </a>

        <a href="https://www.shopify.com/partners" target="_blank" rel="noopener noreferrer">
          <img src={shopify} alt="Shopify Partners" />
        </a>
      </div>

      <div className={styles.buttons}>
        <button>Read Testimonials</button>
        <button onClick={() => navigate("/Portfolio")}>View Case Study</button>
      </div>

      <div className={styles.reviewCard}>
        <h3>Tech Twirl Technologies Reviews</h3>
        <p><strong>5.0 ★★★★★</strong> — 6 reviews</p>

        <div className={styles.reviewContent}>
          <div className={styles.project}>
            <h4>SaaS Development for Fitness Gym</h4>
            <p>💼 Web Development, Accounting Services</p>
            <p>💵 $10,000 to $49,999</p>
            <p>📅 Jan. 2020 - Mar. 2021</p>
          </div>

          <div className={styles.feedback}>
            <blockquote>
              “We are very happy to work with Tech Twirl as they have provided us their quality of work.”
            </blockquote>
            <p><strong>Feedback summary:</strong> Tech Twirl Technologies finished the work within their designated timeline... </p>
            <button onClick={() => navigate("/Portfolio")} className={styles.readMore}>Read Full Review →</button>
          </div>

          <div className={styles.reviewer}>
            <p><strong>CEO of gym25</strong>, Gym25</p>
            <p>📍 Islamabad, Pakistan</p>
            <p>🧑‍💼 11-50 employees</p>
            <p>✅ Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
