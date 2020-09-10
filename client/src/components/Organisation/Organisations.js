import React, { useState } from "react";
import { Card, Container, Button, Row, Col, Form } from "react-bootstrap";
import OrganisationAddForm from "./OrganisationAddForm";
import OrganisationsEditDelete from "./OrganisationsEditDelete";
import "../../css/Organisation.css";

const Organisations = ({ organisations, setOrganisations, isAdmin }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [searchOrg, setSearchOrg] = useState([]);
  const removeOrganisationById = (id) => {
    setOrganisations(organisations.filter(({ _id }) => _id !== id));
  };

  const updateOrganisation = (organisation) => {
    setOrganisations(
      organisations.map((existingOrganisation) =>
        existingOrganisation._id === organisation._id
          ? organisation
          : existingOrganisation
      )
    );
  };
  const filteredOrgs = organisations.filter(
    (organisation) =>
      organisation.name.toLowerCase().includes(searchOrg) ||
      organisation.category.includes(searchOrg)
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="org-headline text-center mt-3">
            Find an Organisation
          </h2>
          <Form.Control
            value={searchOrg}
            onChange={(e) => setSearchOrg(e.target.value)}
            className="input-name mr-2"
            type="search"
            name="from"
            placeholder="Search Organization"
          />
          {isAdmin && (
            <Button
              variant="primary"
              onClick={() => {
                setShowAdd(true);
              }}
            >
              add organisation
            </Button>
          )}
          {showAdd && <OrganisationAddForm setShowAdd={setShowAdd} />}
          {filteredOrgs.map((organisation) => {
            return (
              <Card className="border-2 org-text" key={organisation._id}>
                <Card.Header as="h4">
                  {organisation.name}
                  <div className="float-right">
                    <OrganisationsEditDelete
                      organisation={organisation}
                      removeOrganisationById={removeOrganisationById}
                      updateOrganisation={updateOrganisation}
                      isAdmin={isAdmin}
                    />
                  </div>
                </Card.Header>

                <Card.Body>
                  <Card.Text className="h-auto text-description">
                    {organisation.description}
                  </Card.Text>
                  <Card.Text className="org-card-text">
                    Location: {organisation.location}
                  </Card.Text>
                  <Card.Link
                    className="btn-charity"
                    href={organisation.website}
                  >
                    <Button>View Charity</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
export default Organisations;

