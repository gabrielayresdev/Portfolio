import React from "react";

import styles from "./Project.module.sass";

import htmlIcon from "../../../assets/code-solid.svg";
import navIcon from "../../../assets/location-arrow-solid.svg";

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <img
          src="https://github.com/gabrielayresdev/PodCastfy/blob/main/src/assets/readme_images/desktop.png?raw=true"
          alt="Image do projeto"
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>PodCastfy</h2>
        <p className={styles.description}>
          Aute velit Lorem do amet officia irure ullamco non sit aute aliqua
          esse. Ipsum eiusmod voluptate Lorem eiusmod et reprehenderit voluptate
          est sit quis aliquip. Veniam consequat sint cillum ipsum laborum duis
          in. Tempor elit quis consequat aliquip consectetur laboris ut. Commodo
          fugiat et ullamco laborum qui labore commodo labore consequat.
        </p>
        <div className={styles.technologies}>
          <p data-tech="react">React</p>
          <p data-tech="javascript">Javascript</p>
          <p data-tech="scss">SCSS</p>
          <p data-tech="tailwind">Tailwind css</p>
        </div>
        <div className={styles.buttonContainer}>
          <a
            target="_blank"
            className={`${styles.button} ${styles.code}`}
            href="https://github.com/gabrielayresdev/PodCastfy"
          >
            <img className={styles.buttonIcon} src={htmlIcon} alt="" />
            <span>Código</span>
          </a>
          <a
            target="_blank"
            className={`${styles.button} ${styles.site}`}
            href="https://pod-castfy.vercel.app"
          >
            <img className={styles.buttonIcon} src={navIcon} alt="" />
            <span>Site</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
