import React from "react";
import { NavLink } from "react-router-dom";
import Institue_nav from "../Navbars/Institute_nav";
import Careerassessment_nav from "../Navbars/Careerassessment_nav";
import Careerpath_nav from "../Navbars/Career_paths";
import Studentpath_nav from "../Navbars/Studentpath_nav";

const NavBar = () => {
  var dynamic_btn = (
    <React.Fragment>
      <li className="nav-item">
        <NavLink to="/Login" className="nav-link">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Signup" className="nav-link">
          Register
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
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Logout" className="nav-link">
            Logout
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <div className="container">
          <NavLink to="/" className="nav-brand">
            <img src="/img/cggg1.png" className="image" />
          </NavLink>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/home" className="nav-link">
                  Home
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
                  <NavLink to="/about" className="dropdown-item">
                    About Us
                  </NavLink>
                  <NavLink to="/contact" className="dropdown-item">
                    Contact Us
                  </NavLink>
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

export default NavBar;
