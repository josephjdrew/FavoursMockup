import React, { useState } from 'react';


import { Jumbotron, Container, Col, Row, Button, Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import FavourCard from '../general/FavourCard.js';
import GlobalNavbar from '../general/Navbar.js';
import LawnMowerImg from "../general/img/lawnmower.jpg";
import CoffeeImg from "../general/img/coffee.jpg";



//import './App.css';
library.add(fab, faCheckSquare, faCoffee, faStroopwafel,)


const App = () => (
  <Container fluid className="">
   <GlobalNavbar></GlobalNavbar>
  <Jumbotron fluid className="showcase">
    <h1 className="text-center">Favours.</h1>
    <Form>
      <Row>
        <Col md={3} sm={0}></Col>
        <Col md={6} sm={12}>
          <Form.Control size="lg" type="text" placeholder="Search for favours" />
        </Col>
      </Row>
    </Form>
  </Jumbotron>
  <Row className="newfavours">
    <Col md={2}></Col>
    <Col md={8}>
      <h1>New Favours</h1>
      <Row>
        <Col md={6} sm={12}>
        <FavourCard title="Mow entire lawn" imgurl={LawnMowerImg}></FavourCard>
      </Col>
      <Col md={6} sm={12}>
      <FavourCard title="Buy 5 coffees" imgurl={CoffeeImg}></FavourCard>
      </Col>
      </Row>
      <Row>
        <Col md={6}>
        <FavourCard title="Mow entire lawn" imgurl={LawnMowerImg}></FavourCard>
      </Col>
      <Col md={6}>
      <FavourCard title="Buy 5 coffees" imgurl={CoffeeImg}></FavourCard>
      </Col>
      </Row>
      <Row>
        <Col md={6}>
        <FavourCard title="Mow entire lawn" imgurl={LawnMowerImg}></FavourCard>
      </Col>
      <Col md={6}>
      <FavourCard title="Buy 5 coffees" imgurl={CoffeeImg}></FavourCard>
      </Col>
      </Row>
    </Col>
  </Row>
    {/*<Row>
      <Col md={2} className="sidenav">1 of 3
      
    </Col>

      
    </Row>*/}

   {/* <Jumbotron>
      <h1 className="header"> Welcome To React-Bootstrap</h1>
      <Button>Show Toast</Button>
   </Jumbotron>*/}
  </Container>
);

export default App;
