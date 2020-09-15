import React, { useState } from "react";
import Messages from "./ContactAdmin";
import { Container, Row, Col } from "react-bootstrap";
import ResourceAddForm from "../Resource/ResourceAddForm";

const AdminArea = ({
  resources,
  setResources,
  organisations,
  setOrganisations,
  contactMessages,
  setContactMessages,
  isAdmin,
}) => {
  const [showAdd, setShowAdd] = useState(false);
  const addResource = (resource) => {
    setResources([resource, ...resources]);
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="mt-3">Admin page</h1>
        </Col>
      </Row>
      {isAdmin && (
        <>
          <Row className="mt-5">
            <Col>
              <button
                className="btn-nextlink"
                onClick={() => {
                  setShowAdd(true);
                }}
              >
                add resource
              </button>

              {showAdd && (
                <ResourceAddForm
                  setShowAdd={setShowAdd}
                  resources={resources}
                  addResource={addResource}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Messages
                contactMessages={contactMessages}
                setContactMessages={setContactMessages}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default AdminArea;
