import React from "react";
import styles from "../Css/ProjectBlock.module.css";

const ProjectBlock = ({ heading, text }) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectCard}>
        <h2 className={styles.projectTitle}>{heading}</h2>
        <p className={styles.projectSubtitle}>{text}</p>
      </div>
    </div>
  );
};

export default ProjectBlock;
