import React from 'react';
import { motion } from 'framer-motion';
import  '../styles/Portfolio.css';

const StatSection = () => {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="statsSection"
      initial="hidden"
      animate="visible"
      variants={statsVariants}
    >
      <div className="statsContainer">
        <motion.div 
          className="statCard"
          whileHover={{ scale: 1.1 }}
        >
          <h3>100+</h3>
          <p>Projects Delivered</p>
        </motion.div>
        <motion.div 
          className="statCard"
          whileHover={{ scale: 1.1 }}
        >
          <h3>50+</h3>
          <p>Happy Clients</p>
        </motion.div>
        <motion.div 
          className="statCard"
          whileHover={{ scale: 1.1 }}
        >
          <h3>25+</h3>
          <p>Awards Won</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatSection;