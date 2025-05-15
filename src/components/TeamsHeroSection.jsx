import React from 'react';
import { motion } from 'framer-motion'; 
import styles from '../styles/TeamsHeroSection.module.css'; 
import img from '../assets/background-image.png';

// TeamsHeroSection component
const TeamsHeroSection = () => {
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
    // Animated hero section container
    <motion.div 
      className={styles.heroSection}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      {/* Background image for hero section */}
      <img 
        src={img} 
        alt="Background" 
        className={styles.heroBackground} 
      />

      {/* Text content over the background */}
      <div className={styles.heroContent}> 
        <h1 className="fade-in">Welcome to Our Team</h1> 
        <p className="fade-in">Meet the professionals powering our success</p> 
      </div>
    </motion.div>
  );
};

export default TeamsHeroSection; 
