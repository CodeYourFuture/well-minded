import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import domain from "../../config";
import Button from "react-bootstrap/Button";

const OrganisationEditDelete = ({
  organisation,
  removeOrganisationById,
  updateOrganisation,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addLogo, setAddLogo] = useState(organisation.website);
  const [addName, setAddName] = useState(organisation.name);
  const [addCategory, setAddCategory] = useState(organisation.website);
  const [addWebsite, setAddWebsite] = useState(organisation.website);
  const [addLocation, setAddLocation] = useState(organisation.website);
  const [addDescription, setAddDescription] = useState(
    organisation.description
  );

  const newBody = {
    logo: addLogo,
    name: addName,
    category: addCategory,
    website: addWebsite,
    location: addLocation,
    description: addDescription,
  };

  const handlerRemove = () => {
    if (
      window.confirm(`Are you sure you want to remove '${organisation.name}'?`)
    ) {
      fetch(`${domain}/api/organisations/org/${organisation._id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          removeOrganisationById(organisation._id);
        } else {
          window.alert(`fail delete: ${organisation.name}`);
        }
      });
    }
  };

  const handleUpdate = () => {
    const body = JSON.stringify(newBody);

    fetch(`${domain}/api/organisations/org/${organisation._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => response.json())
      .then((data) => {
        updateOrganisation(data.organisation);
        handleClose();
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="mr-2">
        edit
      </Button>
      <Button variant="danger" onClick={handlerRemove}>
        remove
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2> Update Organisation</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Logo</label>
            <input
              value={addLogo}
              onChange={(e) => {
                setAddLogo(e.target.value);
              }}
            />
            <label>Name</label>
            <input
              value={addName}
              onChange={(e) => {
                setAddName(e.target.value);
              }}
            />
            <label>Category</label>
            <input
              value={addCategory}
              onChange={(e) => {
                setAddCategory(e.target.value);
              }}
            />
            <label>Website</label>
            <input
              value={addWebsite}
              onChange={(e) => {
                setAddWebsite(e.target.value);
              }}
            />
            <label>Location</label>
            <input
              value={addLocation}
              onChange={(e) => {
                setAddLocation(e.target.value);
              }}
            />
            <label>Description</label>
            <input
              value={addDescription}
              onChange={(e) => {
                setAddDescription(e.target.value);
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrganisationEditDelete;
