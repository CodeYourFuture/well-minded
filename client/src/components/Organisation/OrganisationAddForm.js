import React, { useState } from "react";
import domain from "../../config";
import "../../css/organisationAddForm.css";
import { Button, Col, Row, Form } from "react-bootstrap";

const OrganisationAddForm = ({ setShowAdd }) => {
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNewOrg = () => {
    const body = JSON.stringify({
      logo,
      name,
      category,
      website,
      location,
      description,
    });
    fetch(`${domain}/api/organisations/org`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Data added");
      });
  };
  return (
    <Form className="org-add-form " onSubmit={handleAddNewOrg}>
      <h4 className="text-center mt-3"> Add Organisations</h4>
      <Form.Row className="m-3">
        <Col>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </Col>
      </Form.Row>
      <Form.Row className="m-3">
        <Col>
          <Form.Control
            className="org-add-form-description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </Col>
      </Form.Row>
      <Form.Row className="m-3">
        <Col>
          <Form.Control
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Website"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </Col>
      </Form.Row>
      <Form.Row className="m-3 org-add-form-logo">
        <Col>
          <Form.Control
            type="text"
            name="logo"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            placeholder="Logo"
          />
        </Col>
      </Form.Row>
      <Button className="mt-2 mb-1 add-form-btn" variant="outline-primary">
        Add Organisation
      </Button>
      <Button
        className="m-3 add-form-btn"
        onClick={() => {
          setShowAdd(false);
        }}
        variant="outline-danger"
      >
        Cancel
      </Button>
    </Form>
  );
};
export default OrganisationAddForm;
