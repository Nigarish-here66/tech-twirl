import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={styles.heroSection}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1>Software House Portfolio</h1>
        <p>Crafting innovative digital solutions for modern businesses</p>
        <motion.button 
          className={styles.heroButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Work
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
