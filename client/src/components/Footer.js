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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/organisations">Organisations</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="d-flex flex-row-reverse">
            <Nav as="ul" className="text-right">
              <Nav.Item as="li">
                <Nav.Link>
                  <Link to="/AdminArea">Admin</Link>
                </Nav.Link>
                <Nav.Link>
                  {isAdmin ? (
                    <Link
                      onClick={() => {
                        logout();
                      }}
                    > logout</Link>
                  ) : (
                    <Link to="/login">login</Link>
                  )}
                </Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
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
