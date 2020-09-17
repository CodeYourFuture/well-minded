import React, { useState } from "react";
import "../../css/Contact.css";
import { Form, Button } from "react-bootstrap";
import domain from "../../config"
const Contact = () => {
  const [formErrors, setFormErrors] = useState({
      name: null,
      email: null,
      website: null,
      comment: null,
    
  })
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

const [success, setSuccess] = useState({
  sucess: false,
  msg : ""
})

  const handleContact = (e) => {
    const addContact = {
      ...newContact,
      [e.target.name]: e.target.value,
    };
    setNewContact(addContact);
  };


 const validateContact = (contact) =>{
    for (const prop in contact){
      if(contact[prop] === "" || contact[prop] === " "){
        console.log(prop, "....inside ...");
        const newErors = 
          {
            ...formErrors,
            [prop]: `${prop} cant be empty`        
          }
        
          console.log(newErors);
        setFormErrors(newErors)

      }
    }
  }

 const isEmpty = (str) => {
   console.log( "str >>" , str );
    if(str === "") { return true; } else { return false; }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const c = newContact;

    if( isEmpty(c.name) || isEmpty(c.email) || isEmpty(c.comment)){
      validateContact(c);
      return;
    }

    console.log("afterr ");
    fetch(domain+ "/api/contact", {
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

        setFormErrors({
          name: null,
          email: null,
          website: null,
          comment: null,
        
      });

      setSuccess({
        success:true,
        msg: "thank you for concating us !!"
      })

      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container contact">
    <pre>
      { JSON.stringify(formErrors) }
    </pre>
      <h1 className="text-center"> Contact Us </h1>
      <p>
        If you have any suggestions or just want to contact us, please complete
        this form
      </p>

{ success.success &&
      <div className="alert alert-success" role="alert">
      { success.msg }
        </div>
}

      <Form className="text-centre contact-form p-3">
        <Form.Group>
          <Form.Label>Name <span className="asterisk">*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={newContact.name}
            id="name"
            onChange={handleContact}
          />
          { formErrors.name && <div className="text-white bg-danger mt-1"> { formErrors.name } </div> }
        </Form.Group>
        <Form.Group>
          <Form.Label>Email <span className="asterisk">*</span></Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            value={newContact.email}
            onChange={handleContact}
          />
          { formErrors.email && <div className="text-white bg-danger mt-1"> { formErrors.email } </div> }
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
           { formErrors.website && <div className="text-white bg-danger mt-1"> { formErrors.website } </div> }
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment <span className="asterisk">*</span></Form.Label>
          <Form.Control
            row="5"
            as="textarea"
            name="comment"
            placeholder="Enter text here..."
            value={newContact.comment}
            onChange={handleContact}
          />
           { formErrors.comment && <div className="text-white bg-danger mt-1"> { formErrors.comment } </div> }
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit
      </Button>
      </Form>
    </div>
  );
};
export default Contact;