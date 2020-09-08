import React from "react";
// import ResourcesAdmin from "./ResourcesAdmin";
import OrganisationsAdmin from "./OrganisationsAdmin";
import Messages from "./ContactAdmin";



const AdminArea = ({
  resources,
  setResources,
  organisations,
  setOrganisations,
  contactMessages,
  setContactMessages,
  isAdmin,
}) => (
    <div>
      {isAdmin ? (<>   {/* <ResourcesAdmin 
    resources={resources} 
    setResources={setResources} 
    isAdmin={isAdmin}
    /> */}
        {/* <OrganisationsAdmin organisations={organisations} setOrganisations={setOrganisations} /> */}
        <Messages contactMessages={contactMessages}
          setContactMessages={setContactMessages} /> </>) : (<> <p>You are not authorised </p> </>)}
  
  </div>
  );

export default AdminArea;


