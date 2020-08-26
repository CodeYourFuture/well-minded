import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import domain from "../../config";
import Button from "react-bootstrap/Button";

const ResourceEdRe = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addName,setAddName]=useState("")
  const [addDescription, setDescription] = useState("");
  const [addWebsite, setWebsite] = useState("");
  
  const newBody={
    name:addName,
    description:addDescription,
    website:addWebsite
  }

  const handlerRemove = (id) => {
    fetch(`${domain}/api/resources/${id}`,
     { method: "DELETE" })
     .then((res) =>
      res.json(console.log("resource deleted"))
    );
  };

  const handleUpdate = (id) => {
    const body = JSON.stringify(newBody);
    fetch(`${domain}/api/resources/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json(console.log("resource updated")));
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>
      <Button variant="danger" onClick={() => handlerRemove(props.res._id)}>
        remove
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.res.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Name</label>
            <input
              onChange={(e) => {
                setAddName(e.target.value);
              }}
            />
            <label>description</label>
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label>Website</label>
            <input
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(props.res._id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResourceEdRe;
