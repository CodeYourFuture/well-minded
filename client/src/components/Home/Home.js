import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Carousel from "../Home/Carousel";
import Cards from "../Home/Cards";
// import Info from "../Home/Info"
import Entry from "../Home/Entry"
import OrganisationHelpButton from "./OrganisationHelpButton";
import ViewResourcesButton from "./ViewResourceButton"

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          {/* <Carousel/> */}
          <Entry />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <OrganisationHelpButton />
          {/* <Info /> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <ViewResourcesButton/>
          </Col>
      </Row>
    </Container>
  );
};
export default Home;
