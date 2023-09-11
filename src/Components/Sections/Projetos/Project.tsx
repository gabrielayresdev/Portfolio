import React from "react";

import styles from "./Project.module.sass";

import htmlIcon from "../../../assets/code-solid.svg";
import navIcon from "../../../assets/location-arrow-solid.svg";
import { IProject } from "../../../Contexts/ProjectContext";

const Project = ({ project }: { project: IProject }) => {
  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt="Image do projeto" />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <p data-tech={tech}>{tech}</p>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          {project.github && (
            <a
              target="_blank"
              className={`${styles.button} ${styles.code}`}
              href={project.github}
            >
              <img className={styles.buttonIcon} src={htmlIcon} alt="" />
              <span>Código</span>
            </a>
          )}
          {project.deploy && (
            <a
              target="_blank"
              className={`${styles.button} ${styles.site}`}
              href={project.deploy}
            >
              <img className={styles.buttonIcon} src={navIcon} alt="" />
              <span>Site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
