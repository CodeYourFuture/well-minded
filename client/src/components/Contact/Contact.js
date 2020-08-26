import React, { useState } from "react";
import "../../css/Contact.css";
import { set } from "mongoose";

const Contact = () => {

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    website: "",
    comment: ""
  })
  

  const handleContact = (e) => {
    const addContact = {
      ...newContact,
      [e.target.name]: e.target.value,
    };

    setNewContact(addContact);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact)

      })


      .then((res) => {
      
        setNewContact({
          name: "",
          email: "",
          website: "",
          comment: ""
        })
      })


      .catch((err) => console.log(err))

  }


  return (
    <div className="container">
      <h1 className="text-center"> Contact Us </h1>
      <p>
        If you have any suggestions or just want to contact us, please complete
        this form
      </p>

      <div className="mt-5 mb-5">
        <form className="contact-form">
          <div>
            <label for="name" className="control-label mt-2">
              Name
          </label>
            <input className="form-control"
              type="text"
              placeholder="Enter name"
              name="name"
              value={newContact.name}
              id="name"
              required
              onChange={handleContact}
            />
          </div>

          <div>
            <label for="email" className="control-label mt-2" >
              Email
          </label>
            <input className="form-control"
              type="text"
              placeholder="Enter email"
              name="email"
              id="email"
              value={newContact.email}
              required
              onChange={handleContact}
            /></div>

          <div>
            <label for="website" className="control-label mt-2">
              Website
          </label>
            <input className="form-control"
              type="text"
              placeholder="Enter website"
              name="website"
              id="website"
              value={newContact.website}
              optional
              onChange={handleContact}
            /></div>

          <div>
            <label for="comment" className="control-label mt-2">
              Comment
          </label>


            <textarea className="form-control" name="comment" placeholder="Enter text here..." value={newContact.comment} onChange={handleContact}>

            </textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>

        </form>
      </div>
    </div>
  );
};
export default Contact;
