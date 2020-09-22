import React, { useState } from 'react';
import { Jumbotron, Image, Col, Row, Button, Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import UserImg from "./img/person.jpg";

import './SideNav.scss';

library.add(fab, faCheckSquare, faCoffee, faStroopwafel)

class SideNav extends React.Component {
    render() {
      return <Col sm={3} md={2}>
      <Nav className="d-none d-sm-block sidebar" justify="true">
        <ul className="nav nav-pills flex-column">
        <Nav.Item>
          <Image src={UserImg} roundedCircle />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/newfavour" className="profileLink">Greg Smith</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <p>Favours Owed: 3 <br></br> Favours Owing: 5</p>
        </Nav.Item>
        <hr></hr>
        <Nav.Item>
          <Nav.Link href="/" >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/favours" >Favours</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/leaderboard" >Leaderboard</Nav.Link>
        </Nav.Item>
        </ul>
      </Nav>
      </Col>;
    }
  }
  
  export default SideNav;