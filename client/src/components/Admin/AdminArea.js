import React from "react";
import ResourceAddForm from "./ResourceAddForm";

import ResourceEdRe from "./ResourceEdRe";

const AdminArea = ({ resources }) => {
  return (
    <div className="container">
      <ResourceAddForm />

      {resources.length > 0 && 
        resources.map((res) => {
          return (
            <div className="container">
              <div className="card mb-2">
                <h2 className="card-header">
                  {res.name}
                  <div className="float-right">
                    <ResourceEdRe res={res} />
                  </div>
                </h2>

                <div className="card-body">
                  <div>
                    <p className="card-text">{res.description}</p>
                  </div>
                  <div>
                    <p> {res.website}</p>
                  </div>
                </div>
              </div>
            </div>
          );
            })
      }

    </div>
  );
};

export default AdminArea;

// You click on edit. —> 
// you get a new <Modal body={{ 
//   name: “blah blah”,
//    description: “sdksdksjdkshd”, website: “www.hotjdsd.com” }} id=5362532/>
// in modal new hook update text . 
//modal opens —> you have new hooks to update your text—>
//you edit the values —> you click on Submit —> 
 //that’s when the PUT happens with your new values
//  fetch(`${domain}/api/resources/${id}`, {
//    method: "PUT",
//    body: JSON.stringify(),
//  }).then((res) => res.json({ mesg: "data edit" }));