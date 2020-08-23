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
      <form className="form-horizontal">
        <div className="form-group" >
          <label for="name" className="control-label col-sm-2">
            <b>Name</b>
          </label>
          <div className="col-sm-10"><input
            type="text"
            placeholder="Enter name"
            name="name"
            id="name"
            required

          /></div>

          <label for="email" className="control-label col-sm-2" >
            <b>Email</b>
          </label>
          <div className="col-sm-10"><input
            type="text"
            placeholder="Enter email"
            name="email"
            id="email"
            required
          /></div>

          <label for="website" className="control-label col-sm-2">
            <b>Website</b>
          </label>
          <div className="col-sm-10"><input
            type="text"
            placeholder="Enter website"
            name="website"
            id="website"
            optional
          /></div>
          <label for="comment" className="control-label col-sm-2">
            <b>Comment</b>
          </label>
          <div className="col-sm-10">

            <textarea name="comment" placeholder="Enter text here...">

            </textarea>
          </div>
          <button type="submit">Submit</button>

        </div>
      </form>
    </div>
  );
};
export default Contact;
