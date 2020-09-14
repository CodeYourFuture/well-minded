import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../css/home.css";

const Home = () => {
  return (
    <>
      <Container className="home-page">
        <Row>
          <Col className="text-center">
            <h1>Well-minded</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>
              Bring people and organisations together for free support and
              mental health resources
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col className="text-right mb-3 mt-3">
            <Link className="org-btn" to="/organisations">
              Find Organisation to help
            </Link>
          </Col>
          <Col className="text-left mb-3 mt-3">
            <Link className="org-btn" to="/resources">
              View More Resources
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <Cards />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
