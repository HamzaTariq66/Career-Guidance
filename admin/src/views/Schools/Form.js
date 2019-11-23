import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  createSchool,
  updateSchool
} from "../../redux/actions/school";
import "./richTextEditor.css";

class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSchoolId: "",
      initialValues: {
        title: "",
        url: "",
        address: "",
        phone: "",
        body: ""
      }
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.fetchSchoolById = this.fetchSchoolById.bind(this);
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
    phone: Yup.string().required("phone is required")
  });

  componentDidMount() {
    this.fetchSchoolById();
  }

  fetchSchoolById() {
    var schoolId = this.props.match.params.id;
    var school = this.props.schoolList.find(
      school => school.id.toString() === schoolId
    );
    if (schoolId && school) {
      this.populateFormData(schoolId, school);
    } else {
      this.props.history.replace("/schools/create");
    }
  }

  populateFormData(schoolId, school) {
    var initialValues = {
      title: school.title,
      url: school.url,
      address: school.address,
      phone: school.phone,
      body: school.details
    };

    this.setState({
      initialValues,
      updateSchoolId: schoolId
    });
  }

  formSubmit(fields) {
    const schoolId = this.state.updateSchoolId;
    schoolId
      ? this.props.updateSchool({ ...fields, schoolId })
      : this.props.createSchool(fields);
  }

  resetForm() {
    var initialValues = {
      title: "",
      url: "",
      address: "",
      phone: "",
      body: ""
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
    const apiStatus = this.props.apiStatus;
    return (
      <div className="animated fadeIn">
        {this.redirectToTarget(apiStatus)}
        <Row>
          <Col lg={9}>
            <Card>
              <CardHeader>
                <strong>School Form</strong>
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
                        <label htmlFor="address">Address</label>
                        <Field
                          name="address"
                          className={
                            "form-control" +
                            (errors.address && touched.address
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <Field
                          name="phone"
                          type="text"
                          className={
                            "form-control" +
                            (errors.phone && touched.phone ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="body">School Detail</label>

                        <ReactQuill
                          name="body"
                          value={values.body}
                          onChange={async e => {
                            handleChange({
                              target: {
                                name: "body",
                                value: e
                              }
                            });
                          }}
                          modules={this.modules}
                          formats={this.formats}
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
  let createAndUpdateSchoolState = state.createAndUpdateSchool;
  let schoolState = state.school;

  return {
    loading: createAndUpdateSchoolState.loading,
    apiStatus: createAndUpdateSchoolState.status,
    schoolList: schoolState.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { createSchool, updateSchool },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolForm);
