import React, { Component } from "react";
import NavBar from "./../Contact/NavBar";
import Footer from "../Home/Footer";
import axios from "axios";

class Colleges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: [],
      message: "No Colleges Found"
    };
  }

  componentWillMount() {
    axios
        .get("http://localhost:4000/colleges/list", {})
        .then(response => {
          if(typeof response.data.status !== "undefined" && response.data.status == 200) {
            this.setState({ colleges: response.data.college});
          }
        });
  }

  createMarkup(html) {
    return {__html: html };
  }

  render() {
    const colleges = this.state.colleges;
    if(colleges.length == 0) {
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
              Top { colleges.length } Colleges in Pakistan
            </h1>
            {
              colleges.map((college, index) => {
                return (
                  <div className="college_lists mrgnb10" key={index}>
                    <ul>
                      <li>
                        <b>
                          <a target="_blank" href={college.url}>
                            {college.title}
                          </a>
                        </b>
                        <ul className="more-information">
                            <li>
                              <b>Address:</b><span> {college.address}</span>
                            </li>
                            <li>
                              <b>Phone:</b><span> {college.phone}</span>
                            </li>
                            <li>
                              <b>About:</b>
                              <span dangerouslySetInnerHTML={this.createMarkup(college.details)}></span>
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

export default Colleges;
