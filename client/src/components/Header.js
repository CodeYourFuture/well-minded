import React from "react";
import "../css/header.css";
import { Row,Col,Navbar, Nav, Image } from "react-bootstrap";

import logo from "../images/newlogo.png";
const Header = () => {
  return (
    <header className="header">
      <Row>
        <Col>
          <Navbar
            bg="dark"
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
                      <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/About">About us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Organisations">Organisations</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href="/Resources">Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/AdminArea"></Nav.Link>
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
