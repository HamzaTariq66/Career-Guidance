import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

class Careerpath_nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        };
    }
    
    componentWillMount() {
        axios
            .get("http://localhost:4000/subjects/list")
            .then(response => {
            if(typeof response.data.status !== "undefined" && response.data.status == 200) {
                this.setState({ subjects: response.data.subject});
            }
            });
    }

    render() {
        const subjects = this.state.subjects;
        if(subjects.length == 0) {
          return "No Career Found";
        } else {
          return (
              <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="/careers"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span className="text">Career Paths</span>
                </a>
                <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                >
                {
                  subjects.map((subject, index) => {
                      if(subject.display == 1) {
                        return (
                            <NavLink className="dropdown-item" to={'/careers/' + subject.id} key={subject.id}>
                                {subject.title}
                            </NavLink>
                        )          
                      }
                  })
                }
                </div>
              </li>
          );
        }
    }
};

export default Careerpath_nav;

