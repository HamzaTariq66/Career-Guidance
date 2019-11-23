import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutMain from "./Components/About/AboutMain";
import ContactMain from "./Components/Contact/ContactMain";
import HomeMain from "./Components/Home/HomeMain";
import LoginMain from "./Components/Login/LoginMain";
import LogoutMain from "./Components/Logout/LogoutMain";
import ProfileMain from "./Components/Profile/ProfileMain";
import RegisterMain from "./Components/Register/RegisterMain";
import Universities from "./Components/Institutes/Universities";
import Colleges from "./Components/Institutes/Colleges";
import Schools from "./Components/Institutes/Schools";
import Field from "./Components/StudentPath/Field";
import Career from "./Components/CareerPath/Career";
import "./style.css";
import "./App.css";
import Fresult from "./Components/Career Assessment Test/Fresult";

class App extends Component {
  render() {
    var dynamic_routes = (
      <React.Fragment>
        <Route path="/login" component={LoginMain} />
        <Route path="/signup" component={RegisterMain} />
      </React.Fragment>
    );
    const usertokenval = localStorage.getItem("usertoken");
    if (
      usertokenval !== null &&
      typeof usertokenval !== "undefined" &&
      usertokenval !== "undefined"
    ) {
      dynamic_routes = (
        <React.Fragment>
          <Route path="/profile" component={ProfileMain} />
          <Route path="/logout" component={LogoutMain} />
        </React.Fragment>
      );
    }

    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeMain} />
        <Route exact path="/Home" component={HomeMain} />
        <Route path="/contact" component={ContactMain} />
        <Route path="/about" component={AboutMain} />
        {dynamic_routes}
        <Route path="/universities" component={Universities} />
        <Route path="/colleges" component={Colleges} />
        <Route path="/schools" component={Schools} />
        <Route path="/fields/:id?/" component={Field} />
        <Route path="/careers/:id?/" component={Career} />
        <Route path="/assessment_test/:id?/" component={Fresult} />
      </BrowserRouter>
    );
  }
}

export default App;
