import React, { useState } from "react";
import domain from "../../config";
import "../../css/AdminResources.css";

const ResourceAddForm = ({ addResource,setShowAdd }) => {
  
  const emptyResource = {
    name: "",
    description: "",
    website: "",
  };
  const [newResource, setNewResource] = useState(emptyResource);

  const handlerAddnewResource = (event) => {
    const addResource = {
      ...newResource,
      [event.target.name]: event.target.value,
    };
    setNewResource(addResource);
  };

  const handlerAddResourceSubmit = (e) => {
    e.preventDefault();

    fetch(`${domain}/api/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newResource),
    })
      .then((res) => res.json())
      .then((data) => addResource(data.resource));

    setNewResource(emptyResource);
  };

  return (
    <div className="mt-5 mb-5">
      <form className="resources-form">
        <h1> Add resources</h1>
        <div className="form-group ">
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
          <label className="mt-2">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={newResource.description}
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

        <button
          onClick={handlerAddResourceSubmit}
          type="submit"
          className="btn btn-primary mt-3"
        >
          add resource
        </button>

        <button onClick={()=>{setShowAdd(false)}}>Cancel</button>
      </form>
      
    </div>
  );
};

export default ResourceAddForm;
