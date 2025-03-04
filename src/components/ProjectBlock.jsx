import React from "react";
import "../styles/ProjectBlock.css";

const ProjectBlock = ({ heading, text, image }) => {
  return (
    <div className="projectCard">
      {image && <img src={image} alt={heading} className="projectImage" />}
      <h2 className="projectTitle">{heading}</h2>
      <p className="projectSubtitle">{text}</p>
    </div>
  );
};

export default ProjectBlock;
