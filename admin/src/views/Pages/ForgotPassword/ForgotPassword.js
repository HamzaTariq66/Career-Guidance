import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { login } from '../../../redux/actions/loginActions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword:''
    }
  }
  async componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.status === 200) {
    } else if (nextProps.status === 301) {
      this.showAlert('Invalid email or passwrod');
    } else if (nextProps.status === undefined) {
      this.showAlert('Network request failed');
    }
  }
  showAlert = (message) => {
    alert(message)
  }
  login = () => {
    if (this.state.password === '') {
      this.showAlert('Password is required');
    } else if (this.state.confirmPassword === '') {
      this.showAlert('Cnfirm Password is required')
    } else {
      this.props.login({ ...this.state });
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Forgot Password</h1>
                      <p className="text-muted">Enter email to reset your password</p>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Confirm Password" autoComplete="current-password" value={this.state.password} onChange={(event) => this.setState({ confirmPassword: event.target.value })} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          {
                            this.props.loading ? <Spinner color="primary" />
                              :
                              <Button color="primary" className="px-4" onClick={this.login}>Reset</Button>
                          }
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let data = state.loginReducer
  return {
    loading: data.loading,
    status: data.status,
    error: data.error,
    loginData: data.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
