import React from "react";
import styles from "../styles/Teams.module.css";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.logoRow}>
        <img src="/logos/clutch.png" alt="Clutch" />
        <img src="/logos/google.png" alt="Google Reviews" />
        <img src="/logos/trustpilot.png" alt="TrustPilot" />
        <img src="/logos/manifest.png" alt="The Manifest" />
        <img src="/logos/shopify.png" alt="Shopify Partners" />
      </div>

      <div className={styles.buttons}>
        <button onClick={() => navigate("/testimonials")}>Read Testimonials</button>
        <button onClick={() => navigate("/case-study")}>View Case Study</button>
      </div>

      <div className={styles.reviewCard}>
        <h3>EleXoft Technologies Reviews</h3>
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
              “We are very happy to work with Elexoft as they have provided us their quality of work.”
            </blockquote>
            <p><strong>Feedback summary:</strong> Elexoft Technologies finished the work within their designated timeline... </p>
            <button className={styles.readMore}>Read Full Review →</button>
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
