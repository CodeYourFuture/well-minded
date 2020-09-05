import React from "react";
import ResourcesAdmin from "./ResourcesAdmin";
import OrganisationAddForm from "./OrganisationAddForm";

const AdminArea = ({ resources, setResources }) => (
  <div>
    <ResourcesAdmin resources={resources} setResources={setResources} />
    <OrganisationAddForm />
  </div>
);

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
