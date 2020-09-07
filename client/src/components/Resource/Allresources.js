import React from "react";
import "../../css/Allresources.css";
import ResourceEdRe from "./ResourceEdRe"

const Allresources = ({ 
  resource,
  removeResourceById,
  updateResource,
  isAdmin
 }) => {
  return (
    <div className="container">
      <div className="card mb-2">
        <h2 className="card-header">
          {resource.name}
          <div className="float-right">
            <ResourceEdRe
              resource={resource}
              removeResourceById={removeResourceById}
              updateResource={updateResource}
              isAdmin={isAdmin}
            />
          </div>
        </h2>
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
