import React, { useState } from "react";
import '../css/AdminResources.css'
const AdminResources = () => {
  const [newResource, setNewResource] = useState({
    logo: "",
    name: "",
    category: "",
    website: "",
  });

  const handlerAddnewResource = (event) => {
    const addResource = {
      ...newResource,
      [event.target.name]: event.target.value,
    };
    setNewResource(addResource);
  };

  const handlerAddResourceSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/api/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newResource),
    })
      .then((res) => res.json(newResource))

      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-5 mb-5">
      <form className="resources-form">
        <h1> Add resources</h1>
        <div className="form-group ">
          <label className="mt-2">Logo</label>
          <input
            type="text"
            name="logo"
            value={newResource.logo}
            onChange={handlerAddnewResource}
            className="form-control "
            />
          
        </div>
        <div>
          <label>Name</label>

          <input
            className="form-control"
            type="text"
            name="name"
            value={newResource.name}
            onChange={handlerAddnewResource}
          />
        </div>
        <div>
          <label className="mt-2">Website</label>
          <input
            className="form-control"
            type="text"
            name="website"
            value={newResource.website}
            onChange={handlerAddnewResource}
          />
        </div>
        <div>
          <label className="mt-2">Category</label>
          <input
            className="form-control"
            type="text"
            name="category"
            value={newResource.category}
            onChange={handlerAddnewResource}
          />
        </div>

        <button
          onClick={handlerAddResourceSubmit}
          type="submit"
          className="btn btn-primary mt-3"
        >
          add resource
        </button>
      </form>
    </div>
  );
};

export default AdminResources;
