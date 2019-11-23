import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Report from "../Report/Report";

function Result(props) {
  function resetTest() {
    window.location.reload();
  }

  return (
    <CSSTransition
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="container">
        <div className="row">
          <div className="col-6 mrgnb10 fr">
            <strong>All marks are in %.</strong>
            <Report
              subjects={props.quizResult.report_subjects}
              marks={props.quizResult.report_marks}
            />
          </div>
          <div className="col-6 mrgnb10 fr1">
            According to your report We Prefer you to do <br />
            <strong>{props.quizResult.choose}</strong>!<br />
            <button
              className="btn btn-primary"
              type="button"
              onClick={resetTest}
            >
              Click to try again.
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.object.isRequired
};

export default Result;
