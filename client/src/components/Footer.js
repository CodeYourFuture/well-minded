import React from "react";
import { SocialIcon } from "react-social-icons";
import "../css/footer.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {Link}from "react-router-dom"
const Footer = ({isAdmin,logout}) => {
  return (
    <div className="footer font-small pt-4 mt-4">
      <Container className="text-center text-md-left">
        <Row className="footer-link">
          <Col>
            <Nav as="ul">
              <Nav.Item as="li">
                <Nav>
                  <Link  to="/">Home</Link>
                </Nav>
                <Nav>
                  <Link to="/organisations">Organisations</Link>
                </Nav>
                <Nav>
                  <Link to="/resources">Resources</Link>
                </Nav>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="d-flex flex-row-reverse">
            <Nav as="ul" className="text-right">
              <Nav.Item as="li">
                <Nav>
                  {isAdmin ? (
                    <a
                      onClick={() => {
                        logout();
                      }}
                    >
                      logout
                    </a>
                  ) : (
                    <Link to="/login">login</Link>
                  )}
                </Nav>
                <Nav>
                  <Link to="/contact">Contact Us</Link>
                </Nav>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="footer-social mt-3 mb-3">
        <SocialIcon url="http://twitter.com" />

        <SocialIcon className="ml-2 mr-2" url="http://facebook.com" />

        <SocialIcon className="mr-2" url="http://google.com" />

        <SocialIcon url="http://linkedin.com" />
      </div>

      <div className="footer-copyright text-center p-3">
        <Container>
          <Row>
            <Col>
              <p>© 2020 CYF - Well-minded - ldn class 6 </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
