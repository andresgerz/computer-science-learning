import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


import './SignUp.css';

class SignUp extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }


  onSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.username);
  }


  onChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }


  render() {
    return(
      <div className="login-wrapper">
      <br/>
      <br/>
      {
        this.props.isLoggedIn ? 
        <h1 className="item mt-5 m-auto">¡Bienvenido {this.state.username}!</h1> :

        <Form className="item w-25 m-auto" onSubmit={this.onSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              name="username"
              id="username"
              onChange={this.onChange}
              required
              />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              name="password"
              id="password"
              required
              />
          </Form.Group>
          <Form.Group controlId="formGroupPassword2">
            <Form.Label>Repeat password</Form.Label>
            <Form.Control 
              type="password"
              name="password2"
              id="password2"
              required
              />
              
          </Form.Group>
          <br/>
          <br/>
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
        }

    
      </div>
  )
  }
  
}

export default SignUp;