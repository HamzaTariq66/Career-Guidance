import React, { Component } from "react";
import NavBar from "./../Contact/NavBar";
import Footer from "../Home/Footer";
import Single from "../StudentPath/Single";
import axios from "axios";

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: [],
      title: "",
      message: "No Careers Found"
    };
  }

  componentWillReceiveProps(newprops) {
    const ids =
      typeof newprops.match.params.id !== "undefined"
        ? newprops.match.params.id
        : 0;
    this.getCareers(ids);
  }

  componentWillMount() {
    const ids =
      typeof this.props.match.params.id !== "undefined"
        ? this.props.match.params.id
        : 0;
    this.getCareers(ids);
  }

  getCareers(ids) {
    let title = "from below.";

    axios
      .get("http://localhost:4000/careers/list/" + ids, {})
      .then(response => {
        if (
          typeof response.data.status !== "undefined" &&
          response.data.status == 200
        ) {
          if (ids) {
            title =
              typeof response.data.career != "undefined" &&
              response.data.career.length > 0
                ? response.data.career[0]["subject"]
                : "";
            this.setState({ careers: response.data.career, title: title });
          } else {
            this.setState({ careers: response.data.career, title: title });
          }
        }
      });
  }

  render() {
    const careers = this.state.careers;
    if (careers.length == 0) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="container-content">
            <h3 className="text-center mt-5 mb-5">{this.state.message}</h3>
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
              Careers You can choose in {this.state.title}
            </h1>
            <div className="aa">
              <ul>
                {careers.map((career, index) => {
                  return (
                    <Single
                      key={index}
                      id={career.id}
                      title={career.title}
                      url={career.url}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default Career;
