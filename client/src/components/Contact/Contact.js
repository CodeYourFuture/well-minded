import React, { useState } from "react";
import "../../css/Contact.css";
import { Form, Col, Row, Container } from "react-bootstrap";
const Contact = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });
  const handleContact = (e) => {
    const addContact = {
      ...newContact,
      [e.target.name]: e.target.value,
    };
    setNewContact(addContact);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => {
        setNewContact({
          name: "",
          email: "",
          website: "",
          comment: "",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container className="contact">
      <Row>
        <Col className="text-center">
          <h1 className="mt-3">Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="text-align-center">
            If you have any suggestions or just want to contact us, please
            complete this form
          </p>
        </Col>
      </Row>

      <Form className="text-centre contact-form p-5">
        <Form.Group>
          <Form.Label>
            Name <span className="asterisk">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={newContact.name}
            id="name"
            onChange={handleContact}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Email <span className="asterisk">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            value={newContact.email}
            onChange={handleContact}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Website </Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter website"
            name="website"
            id="website"
            value={newContact.website}
            onChange={handleContact}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Comment <span className="asterisk">*</span>
          </Form.Label>
          <Form.Control
            row="5"
            as="textarea"
            name="comment"
            placeholder="Enter text here..."
            value={newContact.comment}
            onChange={handleContact}
          />
        </Form.Group>
        <Form.Label
          className="btn-nextlink float-right"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </Form.Label>
      </Form>
    </Container>
  );
};
export default Contact;
