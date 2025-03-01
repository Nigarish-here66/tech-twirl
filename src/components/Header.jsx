import React from 'react';
import styles from "../Css/Header.module.css";

const Header = () => {
  return (
    <header className={styles.topHeader}>
      <img src="../assets/logo.png" alt="TechTwril" className={styles.logo} />
    </header>
  );
};

export default Header;
