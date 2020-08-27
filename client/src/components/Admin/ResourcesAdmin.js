import React from 'react'
import ResourceAddForm from "./ResourceAddForm";
import ResourceEdRe from "./ResourceEdRe";

const ResourcesAdmin = ({ resources, setResources }) => {

  const addResource = (resource) => {
    setResources([resource, ...resources]);
  };

  const removeResourceById = (id) => {
    setResources(resources.filter(({ _id }) => _id !== id));
  };
  
  const updateResource =(resource)=>{
    setResources(resources.map(existingResource=> 
       existingResource._id === resource._id ? resource : existingResource ))

  }

  return (
    <div className="container">
      <ResourceAddForm resources={resources} addResource={addResource} />

      {resources.length > 0 &&
        resources.map((resource) => {
          return (
            <div className="container" key={resource._id}>
              <div className="card mb-2">
                <div className="card-header">
                  <div>
                    {resource.name}
                    <div className="float-right">
                      <ResourceEdRe
                        resource={resource}
                        removeResourceById={removeResourceById}
                        updateResource={updateResource}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div>
                    <p className="card-text">{resource.description}</p>
                  </div>
                  <div>
                    <p> {resource.website}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ResourcesAdmin;