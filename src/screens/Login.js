import React from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { creds } from '../constant';

class Login extends React.Component {
  state = {
    loginField: {
      email: '',
      password: ''
    },
    isAuthenticated: false,
    error: '',
    redirect: false,
  };
  
  componentDidMount() {
    const { history } = this.props;
    const userdetails = localStorage.getItem('userLoggedIn');
    userdetails && history.push('/dashboard');
  }

changeInputHandler = (key, value) => {
  const { loginField } = this.state;
  loginField[key] = value;
  this.setState({ loginField });
}

loginValidationHandler = () => {
  let { loginField } = this.state;
  let LoginErrors = {};
  let isInputFilled = true;

  if (loginField['email'] !== creds.username) {
    isInputFilled = false;
    LoginErrors['email'] = 'Please enter valid username';
  }

  if (loginField['password'] !== creds.password) {
    isInputFilled = false;
    LoginErrors['password'] = 'Please enter valid password';
  }

  this.setState({ error: LoginErrors });
  return isInputFilled;
}

onSubmit = (e) => {
  e.preventDefault(e);
  if (!this.loginValidationHandler()) {
    return console.log('Please check errors');
  }
  else {   
    const { history } = this.props;
    localStorage.setItem('userLoggedIn', true);
    history.push('/dashboard');
  }
}

render() {    
  return (
    <Container className="login-page">
      <div className="login--wrapper">
        <div className="welcome">
          <h1>Hello There!</h1>
        </div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="useremail">Email</Label>
            <Input type="email" value={this.state.loginField['email']} onChange={(e) => this.changeInputHandler('email', e.target.value)} placeholder="Please enter Email" />
            <span className="error">{this.state.error['email']}</span>
          </FormGroup>
          <FormGroup>
            <Label for="userpassword">Password</Label>
            <Input type="password" value={this.state.loginField['password']} onChange={(e) => this.changeInputHandler('password', e.target.value)} placeholder="Please enter password" />
            <span className="error">{this.state.error['password']}</span>
          </FormGroup>
          <FormGroup>
            <button className="btn btn-primary">Login</button>
          </FormGroup>
        </Form>
      </div>
    </Container>
  );
}
}

export default Login;
