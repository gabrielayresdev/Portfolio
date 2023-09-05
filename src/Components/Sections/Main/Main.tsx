import React from "react";
import cv from "../../../assets/file-lines-regular.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";

import styles from "./Main.module.sass";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.textContainer}>
        <p>Olá &#128075; eu sou o Gabriel</p>

        <h2>Dev</h2>

        <div className={styles.icons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gabrielayresdev/"
          >
            <img src={linkedin} alt="" />
          </a>
          <a target="_blank" href="https://github.com/gabrielayresdev">
            <img src={github} alt="" />
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1yH3YHVnwH7rWvRaQMRfGhE-aL9StB1t-tTbL11gENxs/edit"
          >
            <img src={cv} alt="" />
          </a>
        </div>
        <h2>Frontend</h2>
        <p className={styles.about}>
          Atuo como desenvolvedor frontend com pouco mais de ano de experiência
          no desenvolvimento de projetos
        </p>
      </div>
    </main>
  );
};

export default Main;
