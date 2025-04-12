import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from '../styles/Portfolio.css';

const ProjectCard = ({ project, setCursorVariant }) => {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

 

  return (
    <motion.div
      key={project.id}
      layoutId={project.id.toString()}
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="projectCard"
      style={{
        borderColor: project.color
      }}
      onMouseEnter={() => setCursorVariant("hover")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <div className="projectImageContainer">
        <img 
          src={project.imageUrl } 
          alt={project.title} 
          className="projectImage"
        />
      </div>
      <div className="projectContent">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.technologies.map(tech => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        <div className="projectLinks">
          <motion.a 
            href={project.demoLink}
            whileHover={{ scale: 1.1 }}
            className={styles.demoLink}
          >
            <ExternalLink size={20} /> Live Demo
          </motion.a>
          <motion.a 
            href={project.sourceLink}
            whileHover={{ scale: 1.1 }}
            className={styles.sourceLink}
          >
            <Github size={20} /> Source
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;