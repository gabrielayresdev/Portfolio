import React from "react";
import styles from "./Projects.module.sass";
import Project from "./Project";

const Projects = () => {
  return (
    <section className={styles.projects + " container"}>
      <Project />
    </section>
  );
};

export default Projects;
