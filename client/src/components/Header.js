import React from "react";
import "../css/header.css";
import { Container,Row, Col, Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../images/Newlogo1.png";
const Header = ({ isAdmin }) => {
  return (
    <header className="header">
    <Row>
        <Col style={{paddingRight:0}}>
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
                  <Link to="/organisations"> Organisations </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link to="/resources"> Resources </Link>
                </Nav.Item>
                <Nav.Item>
                  {isAdmin&&
                  <Link to="/adminArea"> Admin </Link>
                  }
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
