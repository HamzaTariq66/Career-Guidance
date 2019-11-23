import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createField, updateField } from "../../redux/actions/field.js";
import { getDegrees } from "../../redux/actions/degree.js";

class FieldForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateFieldId: "",
      initialValues: {
        title: "",
        url: "",
        degree: ""
      },
      selectDegrees: []
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.fetchFieldById = this.fetchFieldById.bind(this);
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
    degree: Yup.string().required("Degree is required")
  });

  componentDidMount() {
    this.fetchFieldById();
    this.props.getDegrees();
  }

  fetchFieldById() {
    var fieldId = this.props.match.params.id;
    var field = this.props.fieldList.find(
      field => field.id.toString() === fieldId
    );
    if (fieldId && field) {
      this.populateFormData(fieldId, field);
    } else {
      this.props.history.replace("/fields/create");
    }
  }

  populateFormData(fieldId, field) {
    var initialValues = {
      title: field.title,
      url: field.url,
      degree: field.degree_id
    };

    this.setState({
      initialValues,
      updateFieldId: fieldId
    });
  }

  formSubmit(fields) {
    const fieldId = this.state.updateFieldId;
    fieldId
      ? this.props.updateField({ ...fields, fieldId })
      : this.props.createField(fields);
  }

  resetForm() {
    var initialValues = {
      title: "",
      url: "",
      degree: ""
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
    const apiStatus = this.props.apiStatus;
    return (
      <div className="animated fadeIn">
        {this.redirectToTarget(apiStatus)}
        <Row>
          <Col lg={9}>
            <Card>
              <CardHeader>
                <strong>Field Form</strong>
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
                        <label htmlFor="degree">Degree</label>
                        <Field
                          component="select"
                          name="degree"
                          className="form-control"
                        >
                          <option>Select Degree</option>
                          {selectDegrees.map((element, index) => {
                            return (
                              <option key={element.id} value={element.id}>
                                {element.title}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="degree"
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
  let createAndUpdateFieldState = state.createAndUpdateField;
  let fieldState = state.field;
  let degreeState = state.degree;
  return {
    loading: createAndUpdateFieldState.loading,
    apiStatus: createAndUpdateFieldState.status,
    fieldList: fieldState.payload,
    degreeList: degreeState.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createField, updateField, getDegrees }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(FieldForm);
