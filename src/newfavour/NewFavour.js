import React, { useState } from 'react';


import { Jumbotron, Container, Col, Row, Image, Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import FavourCard from '../general/FavourCard.js';
import GlobalNavbar from '../general/Navbar.js';
import LawnMowerImg from "../general/img/lawnmower.jpg";
import CoffeeImg from "../general/img/coffee.jpg";
import UserImg from "./img/person.jpg";



import './NewFavour.scss';
library.add(fab, faCheckSquare, faCoffee, faStroopwafel,)


const App = () => (
  <Container fluid className="">
    <Row>
      <Col sm={3} md={2}>
      <Nav bg="danger" className="d-none d-sm-block sidebar" justify="true">
        <ul className="nav nav-pills flex-column">
        <Nav.Item>
          <Image src={UserImg} roundedCircle />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
          Disabled
          </Nav.Link>
        </Nav.Item>
        </ul>
      </Nav>
      </Col>
      {/*<Col sm={3} md={2} style={{height: "2000px"}}></Col> */}

    </Row>
    
  </Container>
);

export default App;
