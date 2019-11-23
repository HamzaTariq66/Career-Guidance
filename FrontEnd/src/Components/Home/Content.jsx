import React from "react";

const Content = () => {
  return (
    <React.Fragment>
      <header>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="img/d.jpg"
                className="d-block w-100 ss"
                alt="First Slide"
              />
              <div className="carousel-caption d-lg-block ">
                <h1 className="display-3 mb-2 font-weight-bold tt">
                  Career Guidance
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit{" "}
                  <br />
                  Curabitur ultricies nisi Nam eget dui. Etiam rhoncus
                </p>
                <button type="button" className="btn btn-outline-danger butn1">
                  Career
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/03.jpg"
                className="d-block w-100 ss"
                alt="Second Slide"
              />
              <div className="carousel-caption  d-lg-block">
                <h1 className="display-3 mb-2 font-weight-bold tt">
                  Career Coaching
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit{" "}
                  <br />
                  Curabitur ultricies nisi Nam eget dui. Etiam rhoncus
                </p>
                <button type="button" className="btn btn-outline-danger butn">
                  Career
                </button>
                <button type="button" className="btn btn-outline-light butn">
                  Learn More
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/04.png"
                className="d-block w-100 ss"
                alt="Third Slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
      <section className="section-o">
        <div className="container text-center section-one">
          <div className="row scnd">
            <div className="col-lg-3 col-md-12">
              <img src="img/5.png " className="img" />
              <h2>About Title</h2>
              <p>
                Quisque sit amet libero purus. Nulla a dignissim quam. In hac
                habitasseplatea dictumst.
              </p>
            </div>
            <div className="col-lg-3 col-md-12">
              <img src="img/6.png" className="img" />
              <h2>About Title</h2>
              <p>
                Quisque sit amet libero purus. Nulla a dignissim quam. In hac
                habitasse platea dictumst.
              </p>
            </div>
            <div className="col-lg-3 col-md-12">
              <img src="img/7.png" className="img" />
              <h2>About Title</h2>
              <p>
                Quisque sit amet libero purus. Nulla a dignissim quam. In hac
                habitasse platea dictumst.
              </p>
            </div>
            <div className="col-lg-3 col-md-12">
              <img src="img/8.png" className="img" />
              <h2>About Title</h2>
              <p>
                Quisque sit amet libero purus. Nulla a dignissim quam. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s">
        <div className="container text-center section-two">
          <h1 className="display-4 mb-5 ">
            <span className="text-center">Our Services</span>
          </h1>
          <div className="row text-justify m-5">
            <div className="col-lg-4 col-md-12">
              <h4>Career Guidance</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto officiis consequuntur vero error
                excepturi.
              </p>
              <br />
              <h4>Easy to Customize</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto officiis consequuntur vero error
                excepturi.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Objectives</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto officiis consequuntur vero error
                excepturi.
              </p>
              <br />
              <h4>Career Planning</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto officiis consequuntur vero error
                excepturi.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Super Fast</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto officiis consequuntur vero error
                excepturi.
              </p>
              <br />
              <h4>Advanced Features</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto officiis consequuntur vero error
                excepturi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fea">
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
      </section>
    </React.Fragment>
  );
};

export default Content;
