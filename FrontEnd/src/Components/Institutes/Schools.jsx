import React, { Component } from "react";
import NavBar from "./../Contact/NavBar";
import Footer from "../Home/Footer";
import axios from "axios";

class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      message: "No School Found"
    };
  }

  componentWillMount() {
    axios
        .get("http://localhost:4000/schools/list", {})
        .then(response => {
          if(typeof response.data.status !== "undefined" && response.data.status == 200) {
            this.setState({ schools: response.data.school});
          }
        });
  }

  createMarkup(html) {
    return {__html: html };
  }

  render() {
    const schools = this.state.schools;
    if(schools.length == 0) {
      return (
        <React.Fragment>
          <NavBar />
          <div>
            <h3 className="text-center mt-5 mb-5">
              {this.state.message}
            </h3>
          </div>
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="mrgnb45 container-content">
            <h1 className="text-center mt-5 mb-5">
              Top { schools.length } School in Pakistan
            </h1>
            {
              schools.map((school, index) => {
                return (
                  <div className="school_lists mrgnb10" key={index}>
                    <ul>
                      <li>
                        <b>
                          <a target="_blank" href={school.url}>
                            {school.title}
                          </a>
                        </b>
                        <ul className="more-information">
                            <li>
                              <b>Address:</b><span> {school.address}</span>
                            </li>
                            <li>
                              <b>Phone:</b><span> {school.phone}</span>
                            </li>
                            <li>
                              <b>About:</b>
                              <span dangerouslySetInnerHTML={this.createMarkup(school.details)}></span>
                            </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                )          
              })
            }
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
};

export default School;
