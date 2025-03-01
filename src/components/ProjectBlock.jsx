import React from "react";
import styles from "../Css/ProjectBlock.module.css";

const ProjectBlock = ({ images, heading, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.images}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className={styles.phone} />
          ))}
        </div>
        <h2 className={styles.title}>{heading}</h2>
        <p className={styles.subtitle}>{text}</p>
      </div>
    </div>
  );
};

export default ProjectBlock;
