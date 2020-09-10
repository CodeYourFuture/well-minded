import React from "react";
import "../css/header.css";
import { Row, Col, Navbar, Nav, Image } from "react-bootstrap";
import {Link} from "react-router-dom"

import logo from "../images/newlogo.png";
const Header = () => {
  return (
    <header className="header">
      <Row>
        <Col>
          <Navbar
            variant="dark"
            expand="md"
            sticky="top"
            className="header-nav"
          >
            <Image className="nav-logo" src={logo} roundedCircle />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Item>
                  <Link to="/"> Home </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/About"> About us </Link>
                  
                </Nav.Item>
                <Nav.Item>
                  <Link to="/Organisations"> Organisations </Link>
                  
                </Nav.Item>

                <Nav.Item>
                  <Link to="/Resources"> Resources </Link>
                 
                </Nav.Item>
                <Nav.Item>
                  <Link to="/AdminArea"> Admin </Link>
                  
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </header>
  );
};
export default Header;
