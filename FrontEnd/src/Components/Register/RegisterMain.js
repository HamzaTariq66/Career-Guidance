import React from "react";
import NavBar from "../Contact/NavBar";
import Footer from "../Home/Footer";
import RegisterContent from "./RegisterContent";

const RegisterMain = () => {
  return (
    <React.Fragment>
      <NavBar />
      <RegisterContent />
      <Footer />
    </React.Fragment>
  );
};

export default RegisterMain;
