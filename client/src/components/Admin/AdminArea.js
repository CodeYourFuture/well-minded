import React from "react";
import Messages from "./ContactAdmin";
import { Container, Row, Col } from "react-bootstrap"


const AdminArea = ({
  resources,
  setResources,
  organisations,
  setOrganisations,
  contactMessages,
  setContactMessages,
  isAdmin,
}) => (

    <Container>
      <Row>
        <Col>
          {isAdmin
            ? (<>
              <Messages contactMessages={contactMessages}
                setContactMessages={setContactMessages} />
            </>)
            : (<> <p>You are not authorised </p> </>)}
        </Col>
      </Row>
    </Container>
  );

export default AdminArea;


