import React from "react";
import NavBar from "../Contact/NavBar";
import Footer from "../Home/Footer";
import ServiceContent from "./ServiceContent";

const ServiceMain = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ServiceContent />
      <Footer />
    </React.Fragment>
  );
};

export default ServiceMain;
