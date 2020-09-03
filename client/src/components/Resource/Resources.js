import React ,{useState}from "react";
import Allresources from "../../components/Resource/Allresources";
import InputResSearch from "../../components/Resource/InputResSearch";


const Resources = ({resources}) => {
  console.log(resources)
  const [searchResource, setSearchResource] = useState("");
  
const filteredData = resources
    .sort((a, b) => (a.name > b.name ? 1 : -1))
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
      <div>
        {filteredData.map((resource) => (
          <Allresources key={resource._id} resource={resource} />
        ))}
      </div>
    </div>
  );
};
export default Resources;
