import React from "react";
import { NavLink } from "react-router-dom";
import Institue_nav from "../Navbars/Institute_nav";
import Careerassessment_nav from "../Navbars/Careerassessment_nav";
import Careerpath_nav from "../Navbars/Career_paths";
import Studentpath_nav from "../Navbars/Studentpath_nav";

const Navbar = () => {
  var dynamic_btn = (
    <React.Fragment>
      <li className="nav-item">
        <NavLink to="/Login" className="nav-link">
          <span className="text">Login</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link">
          <span className="text">Register</span>
        </NavLink>
      </li>
    </React.Fragment>
  );
  const usertokenval = localStorage.getItem("usertoken");
  if (
    usertokenval !== null &&
    typeof usertokenval !== "undefined" &&
    usertokenval !== "undefined"
  ) {
    dynamic_btn = (
      <React.Fragment>
        <li className="nav-item">
          <NavLink to="/Profile" className="nav-link">
            <span className="text">Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Logout" className="nav-link">
            <span className="text">Logout</span>
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="main-nav"
      >
        <div className="container">
          <a href="/" className="navbar-brand ">
            <img src="/img/cggg1.png" className="image" />
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="home" className="nav-link ">
                  <span className="active"> Home</span>
                </NavLink>
              </li>
              <Institue_nav />
              <Studentpath_nav />
              <Careerpath_nav />
              <Careerassessment_nav />
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="text">Approach Us</span>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="about">
                    About Us
                  </a>
                  <a className="dropdown-item" href="contact">
                    Contact Us
                  </a>
                </div>
              </li>
              {dynamic_btn}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
