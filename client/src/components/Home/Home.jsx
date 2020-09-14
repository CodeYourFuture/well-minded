import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import Entry from "./Entry";
import OrganisationHelpButton from "./OrganisationHelpButton";
import ViewResourcesButton from "./ViewResourceButton";
import "../../css/cards.css";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Entry />
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <OrganisationHelpButton />
          </Col>
          <Col className="text-left">
            <ViewResourcesButton />
          </Col>
        </Row>
      </Container>
      <Row >
        <Col>
          <Cards />
        </Col>
      </Row>
    </>
  );
};
export default Home;
