import React, { Component } from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap'

import SignUp from './Home/SignUp';
import Tiros from './Tiros/Tiros';
import Alumnos from './Alumnos/Alumnos';


// I import the Font Awesome icons
import { isArray } from 'util';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUser

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faUser
)


import './NavbarWeb.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class NavbarWeb extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      isLoggedIn: false
    }
  }


  onLogin = (e) => {
    this.setState({
      username: e,
      isLoggedIn: true
    }) 
  }
  

  onLogout = (e) => {
    this.setState({
      username: "",
      isLoggedIn: false
    }) 

  }
  
  
  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar los props):
    if (this.state.isLoggedIn !== prevProps.isLoggedIn) {
      
      sessionStorage.setItem("user", JSON.stringify(this.state));
    }
  }

  componentDidMount() {
    
    let data = JSON.parse(sessionStorage.getItem("user"));
   
 
    if (data != null) {
      this.setState({
        username: data.username,
        isLoggedIn: data.isLoggedIn
      })
    }

  }


  render() {
    return (
    
    <Router>
      <div className="navbar-wrapper">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">Basket App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/alumnos">Alumnos</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/tiros">Tiros</Link></Nav.Link>
            </Nav>
            <Nav className="username-wrapper">
              <div className="username item mt-1">
                <h5>{this.state.username}</h5>
              </div>
              <div className="float-right item">
                
                <FontAwesomeIcon 
                  className="user-icon mr-4"
                  icon={faUser} 
                  size="1x"
                  style={{color: this.state.isLoggedIn ? "#0f0" : "#f00"}}  
                  />
                { this.state.isLoggedIn ? 
                  <Button onClick={this.onLogout}>Logout</Button> :
                  null
                }

              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
               
        <Switch>
          <Route exact path="/">
            <SignUp onLogin={this.onLogin} />
          </Route>
          <Route path="/alumnos">
            <Alumnos />
          </Route>
          <Route path="/tiros">
            <Tiros />
          </Route>
        </Switch>
      </div>
    </Router>
    );

  }
}


export default NavbarWeb;