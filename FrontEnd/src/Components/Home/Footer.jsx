import React from "react";
import "../Home/Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h5>Career Assessment Test</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a target="_blank" href="/test">
                        {" "}
                        For 8th & 9th Std.
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/test">
                        For 10th Std.
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/test">
                        For 11th & 12th Std.
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/test">
                        For Graduates.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4> Career Paths </h4>
                  <ul className="list-unstyled">
                    <li>
                      <a target="_blank" href="/computerscience">
                        For Computer Science Students
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/biology">
                        For Biology Students
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/chemistry">
                        For Chemistry Students
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/physics">
                        For Physics Students
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/english">
                        For English Students
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/maths">
                        For Maths Students
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4>Contact Us</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a target="_blank" href="/contact">
                        Schools
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/contact">
                        Parents & Students
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/contact">
                        Business Enquiries
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/contact">
                        Counselling Centres
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Hami.Cool13"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/hamza-tariq-935780163/"
                      className="icoLinkedin"
                      title="Linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2019 - Govt Islamia College Civil Lines. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
