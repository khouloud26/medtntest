import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="white" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home" id='nmnav'><b>DR ALOULOU Smith</b></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">


    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/home">
    <ReactBootStrap.Nav.Link href="#home" style={{width:'150px'}}><b>HOME</b></ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/rendezvous">
    <ReactBootStrap.Nav.Link href="#rendezvous" style={{width:'150px'}}><b>PRENDRE RDV</b></ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/service">
    <ReactBootStrap.Nav.Link href="#service" style={{width:'150px'}}><b>SERVICES</b></ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/article">
    <ReactBootStrap.Nav.Link eventKey={2} href="#article" style={{width:'150px'}}>
        ARTICLES
      </ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/question">
    <ReactBootStrap.Nav.Link href="#question" style={{width:'150px'}}><b>QUESTIONS </b></ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
