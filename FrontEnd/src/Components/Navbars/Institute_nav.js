import React from "react";
import { NavLink } from "react-router-dom";

const Institute_nav = () => {
  return (
    <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle"
            href=""
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            <span className="text">Institutes</span>
        </a>
        <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
        >
            <NavLink className="dropdown-item" to="/universities">
                Universities
            </NavLink>
            <NavLink className="dropdown-item" to="/colleges">
                Colleges
            </NavLink>
            <NavLink className="dropdown-item" to="/schools">
                Schools
            </NavLink>
        </div>
    </li>              
  );
};

export default Institute_nav;
