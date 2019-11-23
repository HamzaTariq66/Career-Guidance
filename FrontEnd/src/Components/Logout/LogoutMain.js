import React from "react";

const LogoutMain = () => {
  localStorage.removeItem("usertoken");
  window.location.href = "/";
};

export default LogoutMain;
