import React from "react";
import SmallCard from "./SmallCard";
import "../../css/cards.css";
import imageSix from "../../images/image 6.jpg";
import imageFive from "../../images/image 5.jpg";
import imageFour from "../../images/image 4.jpeg";
import {Container,Row,Col} from 'react-bootstrap'
const Cards = () => {
  return (
    <section className="small-cards-holder p-5 mb-5">
      <Container>
        <Row className="d-flex">
          <Col lg ="4">
            <SmallCard
              src={imageSix}
              alt="Card image cap"
              link="https://www.mind.org.uk/information-support/coronavirus/coronavirus-and-your-wellbeing/"
              linkcap="Mental health during pandemic"
            />
          </Col>
          <Col lg="4">
            <SmallCard
              src={imageFive}
              alt="Card image cap"
              link=""
              linkcap="Mental Health Blogs"
            />
          </Col>
          <Col lg="4">
            <SmallCard
              src={imageFour}
              alt="Card image cap"
              link="https://www.nhs.uk/using-the-nhs/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/"
              linkcap="Where to get urgent help"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
