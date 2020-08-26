import React from 'react'
import ResourceAddForm from "./ResourceAddForm";
import ResourceEdRe from "./ResourceEdRe";

const ResourcesAdmin = ({resources})=>{

return (
  <div className="container">
    <ResourceAddForm />

    {resources.length > 0 &&
      resources.map((res) => {
        return (
          <div className="container">
            <div className="card mb-2">
              <h2 className="card-header">
                {res.name}
                <div className="float-right">
                  <ResourceEdRe res={res} />
                </div>
              </h2>

              <div className="card-body">
                <div>
                  <p className="card-text">{res.description}</p>
                </div>
                <div>
                  <p> {res.website}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
  </div>
);
}

export default ResourcesAdmin;