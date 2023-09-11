import React from "react";
import styles from "./Projects.module.sass";
import Project from "./Project";
import { useContext } from "../../../Contexts/ProjectContext";

const Projects = () => {
  const projects = useContext();

  return (
    <section className={styles.projects + " container"}>
      {projects &&
        projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
    </section>
  );
};

export default Projects;
