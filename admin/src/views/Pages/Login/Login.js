import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { login } from '../../../redux/actions/loginActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  async componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.status === 200) {
      this.props.history.replace('/');
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
    if (this.state.email === '') {
      this.showAlert('Email is required');
    } else if(!this.validateEmail(this.state.email)) {
      this.showAlert('Email is invalid');
    } else if (this.state.password === '') {
      this.showAlert('Password is required')
    } else {
      this.props.login({ ...this.state });
    }
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" autoComplete="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          {
                            this.props.loading ? <Spinner color="primary" />
                              :
                              <Button color="primary" className="px-4" onClick={this.login}>Login</Button>
                          }
                        </Col>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)
