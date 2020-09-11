import React from "react";
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

    <div className="admin-area">
      {isAdmin
        ? (<>
            <Messages contactMessages={contactMessages}
              setContactMessages={setContactMessages} /> 
          </>)
        : (<> <p>You are not authorised </p> </>)}


    </div>
  );

export default AdminArea;


