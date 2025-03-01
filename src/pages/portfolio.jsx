import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectBlock from "../components/ProjectBlock";
import Footer from "../components/Footer";

// Sample data for your portfolio projects
const portfolioProjects = [
  {
    id: 1,
    images: ["../assets/Project1.png"],
    heading: "Project One",
    text: "A brief description of Project One."
  },
  {
    id: 2,
    images: ["../assets/Project2.png"],
    heading: "Project Two",
    text: "A brief description of Project Two."
  },
  {
    id: 3,
    images: ["../assets/Project3.png"],
    heading: "Project Three",
    text: "A brief description of Project Three."
  },
  // Add more projects as needed
];

const PortfolioPage = () => {
  return (
    <div>
      {/* Top header with logo */}
      <Header />

      {/* Hero section with background image and overlay */}
      <HeroSection />

      {/* Projects section */}
      <section>
        {portfolioProjects.map((project) => (
          <ProjectBlock
            key={project.id}
            images={project.images}
            heading={project.heading}
            text={project.text}
          />
        ))}
      </section>

      {/* Footer with contact information and social links */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
