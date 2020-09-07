import React ,{useState}from "react";
import Allresources from "./Allresources";
import InputResSearch from "./InputResSearch";
import ResourceAddForm from "./ResourceAddForm"

const Resources = ({ resources, setResources, isAdmin }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [searchResource, setSearchResource] = useState("");

  const addResource = (resource) => {
    setResources([resource, ...resources]);
  };

  const removeResourceById = (id) => {
    setResources(resources.filter(({ _id }) => _id !== id));
  };

  const updateResource = (resource) => {
    setResources(
      resources.map((existingResource) =>
        existingResource._id === resource._id ? resource : existingResource
      )
    );
  };

  const filteredData = resources
    .filter(
      (resource) =>
        resource.name.toLowerCase().includes(searchResource) ||
        resource.description.toLowerCase().includes(searchResource)
    );
  return (
    <div>
      <InputResSearch
        searchResource={searchResource}
        setSearchResource={setSearchResource}
      />
      {isAdmin && (
        <button onClick={() => {setShowAdd(true)}}>
          add resource
        </button>
      )}

      {showAdd && (
        <ResourceAddForm
          setShowAdd={setShowAdd}
          resources={resources}
          addResource={addResource}
        />
      )}

      {filteredData.map((resource) => (
        <Allresources
          key={resource._id}
          resource={resource}
          removeResourceById={removeResourceById}
          updateResource={updateResource}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};
export default Resources;
