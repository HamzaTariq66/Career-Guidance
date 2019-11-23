import React, { Component } from "react";
import NavBar from "./../Contact/NavBar";
import Footer from "../Home/Footer";
import axios from "axios";

class Universities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: [],
      message: "No Universities Found"
    };
  }

  componentWillMount() {
    axios
        .get("http://localhost:4000/universities/list", {})
        .then(response => {
          if(typeof response.data.status !== "undefined" && response.data.status == 200) {
            this.setState({ universities: response.data.university});
          }
        });
  }

  createMarkup(html) {
    return {__html: html };
  }

  render() {
    const universities = this.state.universities;
    if(universities.length == 0) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="container-content">
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
          <div className="mrgnb45">
            <h1 className="text-center mt-5 mb-5">
              Top { universities.length } Universities in Pakistan
            </h1>
            {
              universities.map((university, index) => {
                return (
                  <div className="university_lists mrgnb10" key={university.id}>
                    <ul>
                      <li>
                        <b>
                          <a target="_blank" href={university.url}>
                            {university.title}
                          </a>
                        </b>
                        <ul className="more-information">
                            <li>
                              <b>Address:</b><span> {university.address}</span>
                            </li>
                            <li>
                              <b>Phone:</b><span> {university.phone}</span>
                            </li>
                            <li>
                              <b>About:</b>
                              <span dangerouslySetInnerHTML={this.createMarkup(university.details)}></span>
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

export default Universities;
