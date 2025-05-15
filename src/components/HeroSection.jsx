import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom'; 
import '../styles/HeroSection.css'; 
import img from '../assets/hero.png'; 


const HeroSection = () => {
  // Animation variants for initial and visible states
  const heroVariants = {
    hidden: { opacity: 0, y: -50 }, // Start off-screen and transparent
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
    // Animated container for the hero section
    <motion.div 
      className="heroSection"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      {/* Background image */}
      <img src={img} alt="Background" className="heroBackground" />

      {/* Main content of the hero section */}
      <div className="heroContent"> 
        <h1 className="fade-in">Software House Portfolio</h1>
        <p className="fade-in">Crafting innovative digital solutions for modern businesses</p>
        
        {/* Call-to-action button wrapped in a Link for navigation */}
        <Link to="/portfolio">
          <motion.button 
            className="heroButton"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}   
          >
            Explore Our Work
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroSection; 
