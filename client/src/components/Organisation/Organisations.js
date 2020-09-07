import React, { useState, useEffect } from "react";
import "../../css/Organisation.css";
const Organisations = () => {
  const [org, setOrg] = useState([]);
  const [searchOrg, setSearchOrg] = useState([]);
  useEffect(() => {
    fetch("https://staging-well-minded.herokuapp.com/api/organisations/org")
      .then((res) => res.json())
      .then((data) => {
        setOrg(data);
        
      });
  }, []);
  const filteredOrgs = org.filter((data) =>
    data.name.toLowerCase().includes(searchOrg)
  );

  return (
    <div className="container">
      <input
        value={searchOrg}
        onChange={(e) => setSearchOrg(e.target.value)}
        className="input-name"
        type="search"
        name="from"
        placeholder="Search Organization"
      />

      {filteredOrgs.map((data, index) => {

        return (
          <div key={index}>
            <p className="org-text">{data.name}</p>
            <a href={data.website}>
              <img
                className="org-img rounded mx-auto d-block img-responsive"
                src={data.logo}
                alt="Logo"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Organisations;
