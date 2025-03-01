import React from "react";
import styles from "../Css/HeroSection.module.css";

const HeroSection = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1 className={styles.heroTitle}>Software House Portfolio</h1>
        <nav className={styles.heroNav}>
          <a href="/" className={styles.heroLink}>Home</a>
          <span className={styles.separator}>•</span>
          <a href="/projects" className={styles.heroLink}>Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default HeroSection;
