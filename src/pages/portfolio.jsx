import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import StatSection from '../components/StatSection';
import ProjectCard from '../components/ProjectCard';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    fetchProjects();

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/portfolio');
      setProjects(data);
    } catch (error) {
      console.error('Error fetching portfolio projects:', error);
    }
  };

  const categories = ['all', 'web', 'mobile', 'enterprise'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.projectName?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <HeroSection />
      <div className="container">
        <motion.div
          className="cursor"
          variants={{
            default: { x: mousePosition.x - 16, y: mousePosition.y - 16, scale: 1 },
            hover: { x: mousePosition.x - 16, y: mousePosition.y - 16, scale: 1.5, backgroundColor: "#28569a" }
          }}
          animate={cursorVariant}
          transition={{ type: "tween", ease: "backOut" }}
        />
        <StatSection />
        <div className="controlsSection">
          <div className="searchBox">
            <Search className="searchIcon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="searchInput"
            />
          </div>
          <div className="filterContainer">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filterButton ${activeFilter === category ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
        <motion.div className="projectsGrid" layout>
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={{
                    id: project._id,
                    title: project.projectName,
                    description: project.description,
                    technologies: project.technologies || [],
                    demoLink: project.liveDemoLink || '#',
                    sourceLink: project.githubLink || '#',
                    color: project.color || "#28569a",
                    imageUrl: project.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"
                  }}
                  setCursorVariant={setCursorVariant}
                />
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
