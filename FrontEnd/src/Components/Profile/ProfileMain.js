import React from "react";
import NavBar from "../Contact/NavBar";
import Footer from "../Home/Footer";
import ProfileContent from "./ProfileContent";

const ProfileMain = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ProfileContent />
      <Footer />
    </React.Fragment>
  );
};

export default ProfileMain;
