import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import {
  createQuestion,
  updateQuestion
} from "../../redux/actions/question.js";
import { getDegrees } from "../../redux/actions/degree.js";
import { getSubjects } from "../../redux/actions/subject.js";

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateQuestionId: "",
      initialValues: {
        degree: "",
        subject: "",
        title: "",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
        correct_answer: ""
      },
      selectDegrees: [],
      selectSubjects: []
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.fetchQuestionById = this.fetchQuestionById.bind(this);
    this.populateFormData = this.populateFormData.bind(this);
  }

  modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };

  formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link"
  ];

  validationSchema = Yup.object().shape({
    degree: Yup.string().required("Degree is required"),
    subject: Yup.string().required("Subject is required"),
    title: Yup.string().required("Title is required"),
    option_1: Yup.string().required("Option 1 is required"),
    option_2: Yup.string().required("Option 2 is required"),
    option_3: Yup.string().required("Option 3 is required"),
    option_4: Yup.string().required("Option 4 is required")
  });

  componentDidMount() {
    this.fetchQuestionById();
    this.props.getDegrees();
    this.props.getSubjects();
  }

  fetchQuestionById() {
    var questionId = this.props.match.params.id;
    var question = this.props.questionList.find(
      question => question.id.toString() === questionId
    );
    if (questionId && question) {
      this.populateFormData(questionId, question);
    } else {
      this.props.history.replace("/questions/create");
    }
  }

  populateFormData(questionId, question) {
    const options =
      typeof question.optionss != "undefined"
        ? question.optionss.split("::")
        : [];
    const is_correct_options =
      typeof question.correct_fields != "undefined"
        ? question.correct_fields.split("::")
        : [];
    const option_1 = typeof options[0] != "undefined" ? options[0] : "";
    const option_2 = typeof options[1] != "undefined" ? options[1] : "";
    const option_3 = typeof options[2] != "undefined" ? options[2] : "";
    const option_4 = typeof options[3] != "undefined" ? options[3] : "";
    const correct_answer =
      typeof is_correct_options != "undefined" &&
      is_correct_options.indexOf("1") > -1
        ? parseInt(is_correct_options.indexOf("1")) + 1
        : 1;

    var initialValues = {
      degree: question.degree_id,
      subject: question.subject_id,
      title: question.title,
      option_1: option_1,
      option_2: option_2,
      option_3: option_3,
      option_4: option_4,
      correct_answer: "option_" + correct_answer
    };

    this.setState({
      initialValues,
      updateQuestionId: questionId
    });
  }

  formSubmit(questions) {
    const questionId = this.state.updateQuestionId;
    questionId
      ? this.props.updateQuestion({ ...questions, questionId })
      : this.props.createQuestion(questions);
  }

  resetForm() {
    var initialValues = {
      degree: "",
      subject: "",
      title: "",
      option_1: "",
      option_2: "",
      option_3: "",
      option_4: "",
      correct_answer: ""
    };
    this.setState({
      initialValues
    });
  }

  redirectToTarget = apiStatus => {
    if (apiStatus === 200) {
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    }
  };

  render() {
    const { initialValues } = this.state;
    const selectDegrees = this.props.degreeList;
    const selectSubjects = this.props.subjectList;
    const apiStatus = this.props.apiStatus;
    return (
      <div className="animated fadeIn">
        {this.redirectToTarget(apiStatus)}
        <Row>
          <Col lg={9}>
            <Card>
              <CardHeader>
                <strong>Question Form</strong>
              </CardHeader>
              <CardBody>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={this.validationSchema}
                  onSubmit={this.formSubmit}
                  onReset={this.resetForm}
                  render={({
                    values,
                    errors,
                    status,
                    touched,
                    handleChange
                  }) => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="degree">Degree</label>
                        <Field
                          component="select"
                          name="degree"
                          className="form-control"
                        >
                          <option>Select Degree</option>
                          {selectDegrees.map((element, index) => {
                            if (element.id <= 3) {
                              return (
                                <option key={element.id} value={element.id}>
                                  {element.title}
                                </option>
                              );
                            }
                          })}
                        </Field>
                        <ErrorMessage
                          name="degree"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <Field
                          component="select"
                          name="subject"
                          className="form-control"
                        >
                          <option>Select Subject</option>
                          {selectSubjects.map((element, index) => {
                            if (element.display == 1) {
                              return (
                                <option key={element.id} value={element.id}>
                                  {element.title}
                                </option>
                              );
                            }
                          })}
                        </Field>
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <Field
                          name="title"
                          className={
                            "form-control" +
                            (errors.title && touched.title ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="option_1">Option 1 </label>
                        <Field
                          name="option_1"
                          className={
                            "form-control" +
                            (errors.option_1 && touched.option_1
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="option_1"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          component={RadioButton}
                          name="correct_answer"
                          id="option_1"
                          label="Correct Option"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="option_2">Option 2 </label>
                        <Field
                          name="option_2"
                          className={
                            "form-control" +
                            (errors.option_2 && touched.option_2
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="option_2"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          component={RadioButton}
                          name="correct_answer"
                          id="option_2"
                          label="Correct Option"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="option_3">Option 3 </label>
                        <Field
                          name="option_3"
                          className={
                            "form-control" +
                            (errors.option_3 && touched.option_3
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="option_3"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          component={RadioButton}
                          name="correct_answer"
                          id="option_3"
                          label=" Correct Option"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="option_4">Option 4 </label>
                        <Field
                          name="option_4"
                          className={
                            "form-control" +
                            (errors.option_4 && touched.option_4
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="option_4"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          component={RadioButton}
                          name="correct_answer"
                          id="option_4"
                          label="Correct Option"
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary mr-2 float-right"
                        >
                          Save &nbsp;
                          {this.props.loading ? (
                            <i className="fa fa-circle-o-notch fa-spin"></i>
                          ) : null}
                        </button>
                        <button
                          type="reset"
                          className="btn btn-secondary mr-2 float-right"
                        >
                          Reset
                        </button>
                      </div>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const mapStateToProps = state => {
  let createAndUpdateQuestionState = state.createAndUpdateQuestion;
  let questionState = state.question;
  let degreeState = state.degree;
  let subjectState = state.subject;
  return {
    loading: createAndUpdateQuestionState.loading,
    apiStatus: createAndUpdateQuestionState.status,
    questionList: questionState.payload,
    degreeList: degreeState.payload,
    subjectList: subjectState.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { createQuestion, updateQuestion, getDegrees, getSubjects },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
