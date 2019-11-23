import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUp, updateAdmin, resetAdmin } from "../../redux/actions/admin";

class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateAdminId: '',
            initialValues: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirmPassword: '',
                is_active: 'true',
                is_receive_email: 'true'
            }
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.fetchAdminById = this.fetchAdminById.bind(this);
        this.populateFormData = this.populateFormData.bind(this);

    }

    validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .required('First Name is required'),
        last_name: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });


    componentDidMount() {
        this.fetchAdminById();
    }

    fetchAdminById() {
        var adminId = this.props.match.params.id;
        var user = this.props.adminList.find(user => user.id.toString() === adminId);

        if (adminId && user) {
            this.populateFormData(adminId, user);
        }
        else {
            this.props.history.replace('/admins/sign-up');
        }
    }

    populateFormData(adminId, user) {

        var initialValues = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            confirmPassword: user.password,
            is_active: user.is_active ? 'true' : 'false',
            is_receive_email: user.is_receive_email ? 'true' : 'false',

        }

        this.setState({
            initialValues,
            updateAdminId: adminId
        })

    }

    formSubmit(fields) {
        const adminId = this.state.updateAdminId;
        adminId ? this.props.updateAdmin({ ...fields, adminId }) : this.props.signUp(fields);      

    }

    resetForm() {

        var initialValues = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: '',
            is_active: 'true',
            is_receive_email: 'true'
        }
        this.setState({
            initialValues
        })
    }

    redirectToTarget = (apiStatus) => {
        if (apiStatus === 200) {
            this.props.history.push('/admins');
            this.props.resetAdmin();
        }

    }

    render() {

        const initialValues = this.state.initialValues;
        const apiStatus = this.props.apiStatus;

        return (
            <div className="animated fadeIn">
                {this.redirectToTarget(apiStatus)}
                <Row>
                    <Col lg={9}>
                        <Card>
                            <CardHeader>
                                <strong>Admin Form</strong>
                            </CardHeader>
                            <CardBody>
                                <Formik
                                    enableReinitialize
                                    initialValues={initialValues}
                                    validationSchema={this.validationSchema}
                                    onSubmit={this.formSubmit}
                                    onReset={this.resetForm}
                                    render={({ errors, status, touched }) => (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="first_name">First Name</label>
                                                <Field name="first_name" type="text" className={'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                                                <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="last_name">Last Name</label>
                                                <Field name="last_name" type="text" className={'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '')} />
                                                <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="is_active">Active</label>
                                                <Field name="is_active" component="select" className={'form-control' + (errors.is_active && touched.is_active ? ' is-invalid' : '')} >
                                                    <option value="true">Yes</option>
                                                    <option value="false">No</option>
                                                </Field>
                                                <ErrorMessage name="is_active" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary mr-2 float-right">
                                                    Save
                                                   &nbsp;
                                                    {
                                                        (this.props.loading) ?
                                                            <i className="fa fa-circle-o-notch fa-spin"></i> :
                                                            null
                                                    }
                                                </button>
                                                <button type="reset" className="btn btn-secondary mr-2 float-right">Reset</button>

                                            </div>
                                        </Form>
                                    )}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let signUpAndUpdateAdminState = state.signUpAndUpdateAdmin;
    let adminState = state.admin;

    return {
        loading: signUpAndUpdateAdminState.loading,
        apiStatus: signUpAndUpdateAdminState.status,
        adminList: adminState.payload,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signUp, updateAdmin, resetAdmin }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);


