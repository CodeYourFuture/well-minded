import React, { useState } from "react";
import domain from "../../config";

const OrganisationAddForm = ({setShowAdd}) => {
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
    <div className="mt-5 mb-5">
      <form onSubmit={handleAddNewOrg} className="resources-form">
        <h1> Add Organisation</h1>
        <div className="form-group ">
          <label>Logo</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>
        <div className="form-group ">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-2">Category</label>
          <input
            className="form-control"
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-2">Website</label>
          <input
            className="form-control"
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-2">Location</label>
          <input
            className="form-control"
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-2">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Add Organisation
        </button>
        <button
          onClick={() => {
            setShowAdd(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
export default OrganisationAddForm;
