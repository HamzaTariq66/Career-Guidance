import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

class RegisterContent extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    var emailisValid = this.validateEmail(this.state.email);
    if (
      this.state.first_name == "" ||
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.confirm_password == ""
    ) {
      Swal.fire("Oops...", "Please fill required fields!", "error");
    } else if (!emailisValid) {
      Swal.fire("Oops...", "Please enter valid email address!", "error");
    } else if (this.state.password !== this.state.confirm_password) {
      Swal.fire("Oops...", "Passwords not match!", "error");
    } else {
      axios
        .post("http://localhost:4000/users/register", {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          confirm_password: this.state.password
        })
        .then(response => {
          if (response.data.error == 1) {
            if (
              typeof response.data.status.name !== "undefined" &&
              response.data.status.name == "ValidationError"
            ) {
              Swal.fire("Oops...", "Please fill required fields!", "error");
            } else if (typeof response.data.status !== "undefined") {
              Swal.fire("Oops...", response.data.status, "error");
            } else {
              Swal.fire("Oops...", "Something went wrong!", "error");
            }
          } else {
            Swal.fire("You have successfully registered.");
            window.location.href = "/login";
          }
        });
    }
  };

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent" className="su">
            <h2 className="inactive underlineHover si">
              <NavLink to="Login" className="a">
                {" "}
                Sign In
              </NavLink>{" "}
            </h2>
            <h2 className="active ">
              <NavLink to="SignUp" className="a">
                {" "}
                Sign Up
              </NavLink>{" "}
            </h2>
            <div>
              <strong>* fields are required fields.</strong>
            </div>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                className="fadeIn second mt-4 cf"
                placeholder="First Name *"
                value={this.state.first_name}
                name="first_name"
                onChange={this.onChange}
              />
              <input
                type="text"
                className="fadeIn second cf"
                placeholder="Last Name"
                name="last_name"
                value={this.state.last_name}
                onChange={this.onChange}
              />
              <input
                type="text"
                className="fadeIn second cf"
                placeholder="Email Address *"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <input
                type="password"
                className="fadeIn third "
                placeholder="Password *"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <input
                type="password"
                className="fadeIn third "
                placeholder="Confirm-Password *"
                name="confirm_password"
                value={this.state.confirm_password}
                onChange={this.onChange}
              />
              <input
                type="submit"
                className="fadeIn fourth mt-4 "
                value="Sign Up"
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterContent;
