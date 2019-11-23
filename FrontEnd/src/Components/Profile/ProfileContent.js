import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Moment from 'react-moment';

class ProfileContent extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    tests: [],
    errors: {}
  };

  componentDidMount() {
    const token = localStorage.usertoken;
    let decoded = jwt_decode(token);
    decoded = decoded.sub;
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });

    axios({ 
      method: 'GET', url: "http://localhost:4000/questions/test_list/", 
      headers: {Authorization: "Bearer " + localStorage.getItem("usertoken")} 
    }).then(response => {
      if (
        typeof response.data.status !== "undefined" &&
        response.data.status == 200
      ) { 
          this.setState({ tests: response.data.test});
      }
    });
  }

  render() {
    const tests = this.state.tests;
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Test Taken
                  </button>
                </h2>
              </div>

              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                <table className="table table-bordered mx-auto">
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Status</th>
                      <th>Result</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tests.map((test, index) => {
                        return (
                          <tr key={index}>
                            <td>{test.degree_title}</td>
                            <td>{test.status}</td>
                            <td>{test.result}</td>
                            <td><Moment format="DD-MMM-YYYY hh:mm:ss a">{test.createdAt}</Moment></td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ProfileContent;
