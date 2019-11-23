import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

class Studentpath_nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degrees: []
        };
    }
    
    componentWillMount() {
        axios
            .get("http://localhost:4000/degrees/list", {})
            .then(response => {
            if(typeof response.data.status !== "undefined" && response.data.status == 200) {
                this.setState({ degrees: response.data.degree});
            }
            });
    }
    render() {
        const degrees = this.state.degrees;
        if(degrees.length == 0) {
          return '';
        } else {
          return (
              <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="/fields"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span className="text">Student Paths</span>
                </a>
                <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                >
                {
                  degrees.map((degree, index) => {
                    return (
                        <NavLink className="dropdown-item" to={'/fields/' + degree.id} key={degree.id}>
                            For {degree.title} Students
                        </NavLink>
                    )          
                  })
                }
                </div>
              </li>
          );
        }
    }
};

export default Studentpath_nav;
