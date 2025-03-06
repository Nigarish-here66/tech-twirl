import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import styles from '../styles/Portfolio.module.css';


import HeroSection from '../components/HeroSection';
import StatSection from '../components/StatSection';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights",
    category: "web",
    technologies: ["React", "TensorFlow.js", "Node.js", "WebGL"],
    demoLink: "#",
    sourceLink: "#",
    color: "#0066FF",
    imageUrl: "https://images.datalanguage.com/39Kv06WnQuoWbQeKsA4uof/explainable-ai-dashboard.jpg" 
  },
  {
    id: 2,
    title: "Crypto Trading Platform",
    description: "Advanced cryptocurrency trading platform with real-time market data",
    category: "enterprise",
    technologies: ["React Native", "WebSocket", "Redux", "Firebase"],
    demoLink: "#",
    sourceLink: "#",
    color: "#3399FF",
    imageUrl: "https://assets.devfolio.co/hackathons/c64ccd2fb8d54398bfe3bb913b2012a9/projects/31d9e7bb7b0e459babeffd39c2765a53/f5f6b525-370e-4297-a224-a9190ab3539e.png"
  },
  {
    id: 3,
    title: "Smart Home IoT Hub",
    description: "Centralized IoT control system for smart home devices",
    category: "mobile",
    technologies: ["Flutter", "MQTT", "GraphQL", "AWS IoT"],
    demoLink: "#",
    sourceLink: "#",
    color: "#00CCFF",
    imageUrl: "https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/39332/image-1566402184774-80ed60aba9fd255bac32ecc38c477780.jpg"
  },
 
];

const Portfolio = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const categories = ['all', 'web', 'mobile', 'enterprise'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.cursor}
        variants={{
          default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1
          },
          hover: {
            scale: 1.5,
            backgroundColor: "rgba(0, 102, 255, 0.2)",
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
          }
        }}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatSection />

      {/* Search and Filter Section */}
      <div className={styles.controlsSection}>
        <div className={styles.searchBox}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterContainer}>
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className={styles.projectsGrid}
        layout
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              setCursorVariant={setCursorVariant} 
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
