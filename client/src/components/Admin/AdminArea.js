import React from "react";
// import ResourcesAdmin from "./ResourcesAdmin";
import OrganisationsAdmin from "./OrganisationsAdmin";


const AdminArea = ({
  resources,
  setResources,
  organisations,
  setOrganisations,
  isAdmin,
}) => (
  <div>
    {/* <ResourcesAdmin 
    resources={resources} 
    setResources={setResources} 
    isAdmin={isAdmin}
    /> */}
    <OrganisationsAdmin organisations={organisations} setOrganisations={setOrganisations} />

  </div>
);

export default AdminArea;


