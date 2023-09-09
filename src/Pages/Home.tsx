import React from "react";
import Menu from "../Components/Shared/Menu";
import Main from "../Components/Sections/Main/Main";
import Technologies from "../Components/Sections/Tech/Technologies";
import Contact from "../Components/Sections/Contact/Contact";
import Certificados from "../Components/Sections/Certificados/Certificados";
import Projects from "../Components/Sections/Projetos/Projects";

const Home = () => {
  return (
    <>
      <Menu />
      <Main />
      <Projects />
      <Technologies />
      <Certificados />
      <Contact />
    </>
  );
};

export default Home;
