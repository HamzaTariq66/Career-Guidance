import React from "react";

const AboutContent = () => {
  return (
    <React.Fragment>
      {/* <section className="hodbg">
        <div className="container text-center mt-3 mb-5 p-5 ">
          <div className="mt-5">
            <p className="lead">
              I will always appreciate everything you have taught me. Thank you
              for <br />
              being an exemplary and visionary mentor
            </p>
            <p className="font-weight-bold">
              Our Mentor
              <br />
              <small className="font-italic">Head Of Department</small>
            </p>
            <img className="hod" src="img/hod.jpg" />
          </div>
        </div>
      </section> */}

      {/* <section className="section-t">
        <div className="container text-center section-three">
          <h1 className="display-4 mb-5 ">
            <span className="text-center">Our Team</span>
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <img src="img/hamza.jpg" className="imagee" />
            </div>
            <div className="col-lg-4 col-md-12">
              <img src="img/bilal.jpg" className="imagee" />
            </div>
            <div className="col-lg-4 col-md-12">
              <img src="img/usman.jpg" className="imagee" />
            </div>
          </div>
        </div>
      </section> */}
      <section id="team" class="pb-5">
        <div class="container">
          <h5 class="section-title h1">OUR TEAM</h5>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div
                class="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="mainflip">
                  <div class="frontside">
                    <div class="card">
                      <div class="card-body text-center">
                        <p>
                          <img
                            class=" img-fluid"
                            src="img/hamza.jpg"
                            alt="card image"
                          />
                        </p>
                        <h4 class="card-title">Web developer</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.
                        </p>
                        <a href="#" class="btn btn-primary btn-sm">
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="backside">
                    <div class="card">
                      <div class="card-body text-center mt-4">
                        <h4 class="card-title">Web Developer</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.This is basic card with image
                          on top, title, description and button.This is basic
                          card with image on top, title, description and button.
                        </p>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-skype"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div
                class="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="mainflip">
                  <div class="frontside">
                    <div class="card">
                      <div class="card-body text-center">
                        <p>
                          <img
                            class=" img-fluid"
                            src="img/bilal.jpg"
                            alt="card image"
                          />
                        </p>
                        <h4 class="card-title">Web Developer</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.
                        </p>
                        <a href="#" class="btn btn-primary btn-sm">
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="backside">
                    <div class="card">
                      <div class="card-body text-center mt-4">
                        <h4 class="card-title">Sunlimetech</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.This is basic card with image
                          on top, title, description and button.This is basic
                          card with image on top, title, description and button.
                        </p>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-skype"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div
                class="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="mainflip">
                  <div class="frontside">
                    <div class="card">
                      <div class="card-body text-center">
                        <p>
                          <img
                            class=" img-fluid"
                            src="img/usman.jpg"
                            alt="card image"
                          />
                        </p>
                        <h4 class="card-title">Web Developer</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.
                        </p>
                        <a href="#" class="btn btn-primary btn-sm">
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="backside">
                    <div class="card">
                      <div class="card-body text-center mt-4">
                        <h4 class="card-title">Sunlimetech</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.This is basic card with image
                          on top, title, description and button.This is basic
                          card with image on top, title, description and button.
                        </p>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-skype"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i class="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container text-center section-two">
          <h1 className="display-4 mb-5 ">
            <span className="text-center">Features</span>
          </h1>
          <div className="row text-justify m-5">
            <div className="col-lg-4 col-md-12">
              <h4>Education</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <br />
              <h4>Goals</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Planning</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <br />
              <h4>Interests</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Vision</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
              <br />
              <h4>Values</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </React.Fragment>
  );
};

export default AboutContent;
