import React from "react";
import "../styles/ProjectBlock.css";

const ProjectBlock = ({ heading, text, image }) => {
  return (
    <div className="projectCard">
      <img src={image[0]} alt="Project" className="projectImage" />
      <h2 className="projectTitle">{heading}</h2>
      <p className="projectSubtitle">{text}</p>
    </div>
  );
};

export default ProjectBlock;
