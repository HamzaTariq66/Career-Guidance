import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";

const HomeMain = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default HomeMain;
