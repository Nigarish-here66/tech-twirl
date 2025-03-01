import React from "react";
import styles from "./Header.module.css";

const HeroSection = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Software House Portfolio</h1>
        <nav className={styles.nav}>
          <a href="/" className={styles.link}>Home</a>
          <span className={styles.separator}>•</span>
          <a href="/projects" className={styles.link}>Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default HeroSection;
