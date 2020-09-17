import React, { useState } from 'react';
import { Jumbotron, Container, Col, Row, Button, Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faStroopwafel)

class GlobalNavbar extends React.Component {
    render() {
      return <Navbar bg="info" variant="dark" sticky="top">
      <Navbar.Brand href="#home"><FontAwesomeIcon icon="stroopwafel" /></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Favours</Nav.Link>
        {/*<Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>*/}
    </Navbar>;
    }
  }
  
  export default GlobalNavbar;