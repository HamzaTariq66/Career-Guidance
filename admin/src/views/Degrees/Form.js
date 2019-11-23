import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createDegree,
  updateDegree
} from "../../redux/actions/degree.js";

class DegreeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateDegreeId: "",
      initialValues: {
        title: ""
      }
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.fetchDegreeById = this.fetchDegreeById.bind(this);
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
    this.fetchDegreeById();
  }

  fetchDegreeById() {
    var degreeId = this.props.match.params.id;
    var degree = this.props.degreeList.find(
      degree => degree.id.toString() === degreeId
    );
    if (degreeId && degree) {
      this.populateFormData(degreeId, degree);
    } else {
      this.props.history.replace("/degrees/create");
    }
  }

  populateFormData(degreeId, degree) {
    var initialValues = {
      title: degree.title
    };

    this.setState({
      initialValues,
      updateDegreeId: degreeId
    });
  }

  formSubmit(fields) {
    const degreeId = this.state.updateDegreeId;
    degreeId
      ? this.props.updateDegree({ ...fields, degreeId })
      : this.props.createDegree(fields);
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
      //this.props.history.push("/degrees");
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
                <strong>Degree Form</strong>
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
  let createAndUpdateDegreeState = state.createAndUpdateDegree;
  let degreeState = state.degree;

  return {
    loading: createAndUpdateDegreeState.loading,
    apiStatus: createAndUpdateDegreeState.status,
    degreeList: degreeState.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { createDegree, updateDegree },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DegreeForm);
