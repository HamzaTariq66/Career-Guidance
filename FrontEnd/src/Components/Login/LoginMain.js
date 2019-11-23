import React from "react";
import NavBar from "../Contact/NavBar";
import Footer from "../Home/Footer";
import LoginContent from "./LoginContent";

const LoginMain = () => {
  return (
    <React.Fragment>
      <NavBar />
      <LoginContent />
      <Footer />
    </React.Fragment>
  );
};

export default LoginMain;
