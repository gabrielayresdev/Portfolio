import React from "react";
import styles from "./Technologies.module.sass";

import html from "../../../assets/tech/html5.svg";
import css from "../../../assets/tech/css3-alt.svg";
import react from "../../../assets/tech/react.svg";
import js from "../../../assets/tech/square-js.svg";
import ts from "../../../assets/tech/typescript-programming-language-icon.svg";
import git from "../../../assets/tech/git-alt.svg";
import sass from "../../../assets/tech/sass.svg";
import tailwind from "../../../assets/tech/tailwind-css-icon.svg";

const Technologies = () => {
  return (
    <section id="tecnologias" className={styles.technologies + " container"}>
      <h2>Tecnologias</h2>
      <div className={styles.tech}>
        <img src={html} alt="" />
        <p className={styles.name}>HTML5</p>
      </div>
      <div className={styles.tech}>
        <img src={css} alt="" />
        <p className={styles.name}>CSS3</p>
      </div>
      <div className={styles.tech}>
        <img src={react} alt="" />
        <p className={styles.name}>React</p>
      </div>
      <div className={styles.tech}>
        <img src={js} alt="" />
        <p className={styles.name}>JavaScript</p>
      </div>
      <div className={styles.tech}>
        <img src={ts} alt="" />
        <p className={styles.name}>TypeScript</p>
      </div>
      <div className={styles.tech}>
        <img src={git} alt="" />
        <p className={styles.name}>Git</p>
      </div>
      <div className={styles.tech}>
        <img src={sass} alt="" />
        <p className={styles.name}>Sass</p>
      </div>
      <div className={styles.tech}>
        <img src={tailwind} alt="" />
        <p className={styles.name}>Tailwind</p>
      </div>
    </section>
  );
};

export default Technologies;
