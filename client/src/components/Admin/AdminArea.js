import React from "react";
import ResourceAddForm from "./ResourceAddForm";
import ResourceGetId from "./ResourceGetId";
import OrganisationAddForm from "./OrganisationAddForm";
import ResourceDelId from "./ResourceDelId"
import ResourceEdId from "./ResourceEdId";
const AdminArea = () => {
  return (
    <div className='container'>
      <ResourceAddForm/>
      <ResourceGetId/>
      <OrganisationAddForm/>
    </div>
  );
};
export default AdminArea;
