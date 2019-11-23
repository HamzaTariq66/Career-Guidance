import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

class LoginContent extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.email == "" || this.state.password == "") {
      Swal.fire("Oops...", "Invalid email/password!", "error");
    } else {
      axios
        .post("http://localhost:4000/users/login", {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          console.log(response);
          if (response.data.error == 1) {
            if (
              typeof response.data.status.name !== "undefined" &&
              response.data.status.name == "ValidationError"
            ) {
              Swal.fire("Oops...", "Invalid email/password!", "error");
            } else if (typeof response.data.status !== "undefined") {
              Swal.fire("Oops...", response.data.status, "error");
            } else {
              Swal.fire("Oops...", "Something went wrong!", "error");
            }
          } else {
            localStorage.setItem("usertoken", response.data.token);
            window.location.href = "/profile";
          }
        })
        .catch(err => {
          Swal.fire("Oops...", "Something went wrong!", "error");
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h2 className="active mt-5">
              <NavLink to="Login" className="a">
                {" "}
                Sign In
              </NavLink>{" "}
            </h2>
            <h2 className="inactive underlineHover">
              <NavLink to="SignUp" className="a">
                {" "}
                Sign Up
              </NavLink>{" "}
            </h2>
            <div className="fadeIn first">
              <img src="img/img-01.png" id="icon" alt="User Icon" />
            </div>

            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                className="fadeIn second mt-4 cf"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Email/Username"
              />
              <input
                type="password"
                className="fadeIn third "
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="password"
              />
              <input
                type="submit"
                className="fadeIn fourth mt-4 "
                value="Log In"
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginContent;
