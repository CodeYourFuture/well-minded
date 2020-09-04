import React from "react";
import ResourcesAdmin from "./ResourcesAdmin";
import OrganisationsAdmin from "./OrganisationsAdmin";


const AdminArea = ({
  resources,
  setResources,
  organisations,
  setOrganisations,
}) => (
  <div>
    <ResourcesAdmin resources={resources} setResources={setResources} />
    <OrganisationsAdmin organisations={organisations} setOrganisations={setOrganisations} />

  </div>
);

export default AdminArea;


