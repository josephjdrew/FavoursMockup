import React, { useState } from 'react';
import { Jumbotron, Container, Col, Row, Button, Nav, Navbar, FormControl, Form, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import UserImg from './img/person.jpg'

library.add(fab, faCheckSquare, faCoffee, faStroopwafel)

class GlobalNavbar extends React.Component {
    render() {
      return <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#home"><FontAwesomeIcon icon="stroopwafel" /></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Favours</Nav.Link>
        
        {/*<Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
      </Nav>
      <Nav className="ml-auto">
      <img src={UserImg} className="avatar" alt="Avatar"></img>
      <NavDropdown title="James Brown" id="basic-nav-dropdown" className="">
        <NavDropdown.Item href="#action/3.1">My Favours</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">New Favour</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>*/}
    </Navbar>;
    }
  }
  
  export default GlobalNavbar;