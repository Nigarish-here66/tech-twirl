import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectBlock from "../components/ProjectBlock";
import Footer from "../components/Footer";
import "../styles/ProjectBlock.css"; 

const portfolioProjects = [
  { 
    id: 1, 
    heading: "Project One", 
    text: "A brief description of Project One.", 
    image: "../assets/Project1.png" 
  },
  { 
    id: 2, 
    heading: "Project Two", 
    text: "A brief description of Project Two.", 
    image: "../assets/Project1.png" 
  },
  { 
    id: 3, 
    heading: "Project Three", 
    text: "A brief description of Project Three.", 
    image: "../assets/Project1.png" 
  },
  { 
    id: 4, 
    heading: "Project Four", 
    text: "A brief description of Project Four.", 
    image: "../assets/Project1.png" 
  },
  { 
    id: 5, 
    heading: "Project Five", 
    text: "A brief description of Project Five.", 
    image: "../assets/Project1.png" 
  },
  { 
    id: 6, 
    heading: "Project Six", 
    text: "A brief description of Project Six.", 
    image: "../assets/Project1.png" 
  },
 
];

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <section className="projectGrid">
        {portfolioProjects.map((project) => (
          <ProjectBlock 
            key={project.id} 
            heading={project.heading} 
            text={project.text} 
            image={project.image} 
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
