import React from "react";
import Menu from "../Components/Shared/Menu";
import Main from "../Components/Sections/Main/Main";
import Technologies from "../Components/Sections/Tech/Technologies";
import Contact from "../Components/Sections/Contact/Contact";

const Home = () => {
  return (
    <>
      <Menu />
      <Main />
      <Technologies />
      <Contact />
    </>
  );
};

export default Home;
