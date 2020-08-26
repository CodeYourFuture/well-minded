import React, { useState, useEffect } from "react";

const Organisations = () => {
  const [org, setOrg] = useState([]);
  const [searchOrg, setSearchOrg] = useState([]);
  useEffect(() => {
    fetch("https://staging-well-minded.herokuapp.com/api/organisations/org")
      .then((res) => res.json())
      .then((data) => {
        setOrg(data);
        console.log(data);
      });
  }, []);
  const filteredOrgs = (value) => {
    setSearchOrg(org.filter((data) => data.name.toLowerCase().includes(value)));
  };

  const handleChange = (e) => {
    filteredOrgs(e.target.value.toLowerCase());
  };
  return (
    <div className="container">
      <h2>Search for Organization</h2>
      <input
        // value={searchOrg}
        onChange={handleChange}
        className="input-name"
        type="search"
        name="from"
        placeholder="Search Organization"
      />
      {org.map((data,index) => {
        return (
          <div key={index}>
            <p >{data.name}</p>
            <img src={data.logo} alt="Logo" />
          </div>
        );
      })}
    </div>
  );
};

export default Organisations;
