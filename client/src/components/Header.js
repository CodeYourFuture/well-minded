import React from "react";
// import "../css/Header.css";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Image width={80} height={80} src={logo} roundedCircle />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav>
            <Nav className="nav-item">
              <Link className="nav-link" to="/About">
                About us
              </Link>
            </Nav>
            <Nav className="nav-item">
              <Link className="nav-link" to="/Organisations">
                Organisations
              </Link>
            </Nav>
            <Nav className="nav-item">
              <Link className="nav-link" to="/Resources">
                Resources
              </Link>
            </Nav>
            <Nav className="nav-item">
              <Link className="nav-link" to="/AdminArea">
                Admin
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
