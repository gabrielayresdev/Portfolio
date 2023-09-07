import React from "react";
import Menu from "../Components/Shared/Menu";
import Main from "../Components/Sections/Main/Main";
import Technologies from "../Components/Sections/Tech/Technologies";
import Contact from "../Components/Sections/Contact/Contact";
import Certificados from "../Components/Sections/Certificados/Certificados";

const Home = () => {
  return (
    <>
      <Menu />
      <Main />
      <Technologies />
      <Certificados />
      <Contact />
    </>
  );
};

export default Home;
