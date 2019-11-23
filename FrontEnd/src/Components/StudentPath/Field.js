import React, { Component } from "react";
import NavBar from "./../Contact/NavBar";
import Footer from "../Home/Footer";
import Single from "../StudentPath/Single";
import axios from "axios";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      title: "",
      message: "No Fields Found"
    };
  }

  componentWillReceiveProps(newprops) {
    const ids =
      typeof newprops.match.params.id !== "undefined"
        ? newprops.match.params.id
        : 0;
    this.getFields(ids);
  }

  componentWillMount() {
    const ids =
      typeof this.props.match.params.id !== "undefined"
        ? this.props.match.params.id
        : 0;
    this.getFields(ids);
  }

  getFields(ids) {
    let title = "from below.";

    axios.get("http://localhost:4000/fields/list/" + ids, {}).then(response => {
      if (
        typeof response.data.status !== "undefined" &&
        response.data.status == 200
      ) {
        if (ids) {
          title =
            typeof response.data.field != "undefined" &&
            response.data.field.length > 0
              ? response.data.field[0]["degree"]
              : "";
          this.setState({ fields: response.data.field, title: title });
        } else {
          this.setState({ fields: response.data.field, title: title });
        }
      }
    });
  }

  render() {
    const fields = this.state.fields;
    if (fields.length == 0) {
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
              Fields You can choose in {this.state.title}
            </h1>
            <div className="aa">
              <ul>
                {fields.map((field, index) => {
                  return (
                    <Single
                      key={index}
                      id={field.id}
                      title={field.title}
                      url={field.url}
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

export default Field;
