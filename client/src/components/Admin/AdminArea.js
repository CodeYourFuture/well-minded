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
      {isAdmin
        ? (<>
            <Messages contactMessages={contactMessages}
              setContactMessages={setContactMessages} /> 
          </>)
        : (<> <p>You are not authorised </p> </>)}

    </div>
  );

export default AdminArea;


