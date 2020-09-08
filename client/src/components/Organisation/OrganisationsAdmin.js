import React from "react";
import OrganisationAddForm from "./OrganisationAddForm";
import OrganisationsEditDelete from "./OrganisationsEditDelete"

const OrganisationsAdmin = ({ organisations, setOrganisations }) => {
     
    const removeOrganisationById = (id) => {
       setOrganisations(organisations.filter(({ _id }) => _id !== id));
     };

     const updateOrganisation = (organisation) => {
       setOrganisations(
         organisations.map((existingOrganisation) =>
           existingOrganisation._id === organisation._id ? organisation : existingOrganisation
         )
       );
     };
     
  return (
    <div className="container">
      <OrganisationAddForm />
      {organisations.map((organisation) => {
        return (
          <div className="card border-secondary" key={organisation._id}>
            <img
              className="rounded float-left w-25 p-3 img-thumbnail"
              src={organisation.logo}
              alt="organisation logo"
            />

            <div className="card-body">
              <div className="float-right">
                <OrganisationsEditDelete
                  organisation={organisation}
                  removeOrganisationById={removeOrganisationById}
                  updateOrganisation={updateOrganisation}
                />
              </div>
              <h3 className="card-title">{organisation.name}</h3>
              <p className="card-text">{organisation.category}</p>
              <a href={organisation.website} className="card-text">
                {organisation.website}
              </a>
              <p className="card-text">{organisation.location}</p>
              <p className="card-text">{organisation.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrganisationsAdmin;
