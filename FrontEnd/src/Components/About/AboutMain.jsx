import React from "react";
import NavBar from "../Contact/NavBar";
import Footer from "../Home/Footer";
import AboutContent from "./AboutContent";

const AboutMain = () => {
  return (
    <React.Fragment>
      <NavBar />
      <AboutContent />
      <Footer />
    </React.Fragment>
  );
};

export default AboutMain;
