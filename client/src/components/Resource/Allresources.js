import React from "react";
import "../../css/Allresources.css";

const Allresources = ({ resource }) => {
  return (
    <div className="container">
      <div className="card mb-2">
        <h2 className="card-header">{resource.name}</h2>
        <div className="card-body">
          <div>
            <p className="card-text">{resource.description}</p>
          </div>
          <div>
            <a href={resource.website} className="btn btn-primary float-right">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allresources;
