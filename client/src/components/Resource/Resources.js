import React,{useState, useEffect} from "react";
import Allresources from "../../components/Resource/Allresources";
import InputResSearch from "../../components/Resource/InputResSearch";


const Resources = () => {
  const [resources,setResources]=useState([])
  const [error,setError]=useState(null)
  const [searchResource, setSearchResource] = useState("");
  useEffect(()=>{
    fetch("http://localhost:5000/api/resources/")
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch(setError);
  },[]);
  if(error){
    return (
      <div>
        <h2>Error</h2>
        {error.message}
      </div>
    )
  }
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
