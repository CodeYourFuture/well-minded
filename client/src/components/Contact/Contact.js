import React from "react";
import "../../css/Contact.css";

const Contact = () => {
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
              id="name"
              required

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
              required
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
              optional
            /></div>

          <div>
            <label for="comment" className="control-label mt-2">
              Comment
          </label>


            <textarea className="form-control" name="comment" placeholder="Enter text here...">

            </textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>

        </form>
      </div>
    </div>
  );
};
export default Contact;
