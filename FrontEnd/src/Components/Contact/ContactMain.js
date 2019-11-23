import React from "react";
import Navbar from "./NavBar";
import Footer from "../Home/Footer";
import Content from "./ContactContent";
const ContactMain = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default ContactMain;
