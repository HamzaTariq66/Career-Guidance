import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createCareer, updateCareer } from "../../redux/actions/career.js";
import { getSubjects } from "../../redux/actions/subject.js";

class CareerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateCareerId: "",
      initialValues: {
        title: "",
        url: "",
        subject: ""
      },
      selectSubjects: []
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.fetchCareerById = this.fetchCareerById.bind(this);
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
    title: Yup.string().required("Title is required"),
    subject: Yup.string().required("Subject is required")
  });

  componentDidMount() {
    this.fetchCareerById();
    this.props.getSubjects();
  }

  fetchCareerById() {
    var careerId = this.props.match.params.id;
    var career = this.props.careerList.find(
      career => career.id.toString() === careerId
    );
    if (careerId && career) {
      this.populateFormData(careerId, career);
    } else {
      this.props.history.replace("/careers/create");
    }
  }

  populateFormData(careerId, career) {
    var initialValues = {
      title: career.title,
      url: career.url,
      subject: career.subject_id
    };

    this.setState({
      initialValues,
      updateCareerId: careerId
    });
  }

  formSubmit(careers) {
    const careerId = this.state.updateCareerId;
    careerId
      ? this.props.updateCareer({ ...careers, careerId })
      : this.props.createCareer(careers);
  }

  resetForm() {
    var initialValues = {
      title: "",
      url: "",
      subject: ""
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
    const selectSubjects = this.props.subjectList;
    const apiStatus = this.props.apiStatus;
    return (
      <div className="animated fadeIn">
        {this.redirectToTarget(apiStatus)}
        <Row>
          <Col lg={9}>
            <Card>
              <CardHeader>
                <strong>Career Form</strong>
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
                        <label htmlFor="url">Url</label>
                        <Field
                          name="url"
                          className={
                            "form-control" +
                            (errors.url && touched.url ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="url"
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
                            return (
                              <option key={element.id} value={element.id}>
                                {element.title}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="invalid-feedback"
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

const mapStateToProps = state => {
  let createAndUpdateCareerState = state.createAndUpdateCareer;
  let careerState = state.career;
  let subjectState = state.subject;
  return {
    loading: createAndUpdateCareerState.loading,
    apiStatus: createAndUpdateCareerState.status,
    careerList: careerState.payload,
    subjectList: subjectState.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { createCareer, updateCareer, getSubjects },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CareerForm);
