import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createSubject,
  updateSubject
} from "../../redux/actions/subject.js";

class SubjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSubjectId: "",
      initialValues: {
        title: ""
      }
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.fetchSubjectById = this.fetchSubjectById.bind(this);
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
  });

  componentDidMount() {
    this.fetchSubjectById();
  }

  fetchSubjectById() {
    var subjectId = this.props.match.params.id;
    var subject = this.props.subjectList.find(
      subject => subject.id.toString() === subjectId
    );
    if (subjectId && subject) {
      this.populateFormData(subjectId, subject);
    } else {
      this.props.history.replace("/subjects/create");
    }
  }

  populateFormData(subjectId, subject) {
    var initialValues = {
      title: subject.title
    };

    this.setState({
      initialValues,
      updateSubjectId: subjectId
    });
  }

  formSubmit(fields) {
    const subjectId = this.state.updateSubjectId;
    subjectId
      ? this.props.updateSubject({ ...fields, subjectId })
      : this.props.createSubject(fields);
  }

  resetForm() {
    var initialValues = {
      title: ""
    };
    this.setState({
      initialValues
    });
  }

  redirectToTarget = apiStatus => {
    if (apiStatus === 200) {
      //this.props.history.push("/subjects");
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    }
  };

  render() {
    const { initialValues } = this.state;
    const apiStatus = this.props.apiStatus;
    return (
      <div className="animated fadeIn">
        {this.redirectToTarget(apiStatus)}
        <Row>
          <Col lg={9}>
            <Card>
              <CardHeader>
                <strong>Subject Form</strong>
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
  let createAndUpdateSubjectState = state.createAndUpdateSubject;
  let subjectState = state.subject;

  return {
    loading: createAndUpdateSubjectState.loading,
    apiStatus: createAndUpdateSubjectState.status,
    subjectList: subjectState.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { createSubject, updateSubject },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectForm);
