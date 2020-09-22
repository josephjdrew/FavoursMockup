import React, { useState } from 'react';


import { Card, Container, Col, Row, Button, Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import FavourCard from '../general/FavourCard.js';
import GlobalNavbar from '../general/Navbar.js';
import SideNav from '../general/SideNav.js';

import LawnMowerImg from "../general/img/lawnmower.jpg";
import CoffeeImg from "../general/img/coffee.jpg";

import './NewFavour.scss';


library.add(fab, faCheckSquare, faCoffee, faStroopwafel,)


const App = () => (
  <Container fluid className="new-favour">
    <Row>
      <SideNav></SideNav>
      <Col xs={1}></Col>
      <Col xs={8} justify="true">
      <Card className="inputCard">
        <Card.Header>New Favour</Card.Header>
        <Card.Body>
        <Form>
        <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name of favour here" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description:</Form.Label>
    <Form.Control type="text" placeholder="Enter a description of the favour here"/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
         {/*<Card.Title>Name:</Card.Title>
         <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
         <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
      </Col>
    </Row>
    
  </Container>
);

export default App;
