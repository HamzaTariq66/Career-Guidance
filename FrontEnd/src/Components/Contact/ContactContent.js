import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Content extends Component {
  state = {
    full_name: "",
    email: "",
    subject: "",
    message: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const contactUser = {
      full_name: this.state.full_name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    axios
      .post("http://localhost:4000/users/contact", contactUser)
      .then(response => {
        if (
          typeof response.data.status !== "undefined" &&
          response.data.status == 200
        ) {
          this.setState({ universities: response.data.university });
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <section className="contact">
          <div className="container text-center">
            <h1 className="display-4 mb-5">Contact Us</h1>
            <div className="row">
              <div className="col-lg-8 ">
                <h3 className="text-left mb-4">Get in touch</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="col-lg-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="full_name"
                        value={this.state.full_name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-lg-12 pt-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows="9"
                        name="message"
                        value={this.state.message}
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-left mt-2">
                    <button
                      type="submit"
                      className="btn btn-outline-danger butn"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 text-left">
                <h3 className="mb-4">Contact Information</h3>
                <p>
                  Govt. Islamia College Civil Lines , Lahore,
                  <br />
                  +92 42 99210676
                  <br />
                  +92 (305) 430 6616
                  <br />
                  hami.cool74@gmail.com
                  <br />
                  www.careerguidance.com
                </p>
                <a href="#" className="btn btn-social btn-facebook">
                  <span className="fa fa-facebook"></span>
                </a>
                <a href="#" className="btn  btn-social btn-twitter">
                  <span className="fa fa-twitter"></span>
                </a>
                <a href="#" className="btn  btn-social btn-instagram">
                  <span className="fa fa-instagram"></span>
                </a>
                <a href="#" className="btn  btn-social btn-linkedin">
                  <span className="fa fa-linkedin"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Content;
