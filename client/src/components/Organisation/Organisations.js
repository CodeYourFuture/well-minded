import React, { useState } from "react";
import { Card, Container, Button, Row, Col, Form } from "react-bootstrap";
import OrganisationAddForm from "./OrganisationAddForm";
import OrganisationsEditDelete from "./OrganisationsEditDelete";
import "../../css/Organisation.css";

const Organisations = ({ organisations, setOrganisations, isAdmin }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [searchOrg, setSearchOrg] = useState([]);
  const removeOrganisationById = (id) => {
    setOrganisations(organisations.filter(({ _id }) => _id !== id));
  };

  const updateOrganisation = (organisation) => {
    setOrganisations(
      organisations.map((existingOrganisation) =>
        existingOrganisation._id === organisation._id
          ? organisation
          : existingOrganisation
      )
    );
  };
  const filteredOrgs = organisations.filter(
    (organisation) =>
      organisation.name.toLowerCase().includes(searchOrg) ||
      organisation.category.includes(searchOrg)
  );

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="org-headline">Find an Organisation</h3>
          <Form.Control
            value={searchOrg}
            onChange={(e) => setSearchOrg(e.target.value)}
            className="input-name mr-2"
            type="search"
            name="from"
            placeholder="Search Organization"
          />
          {isAdmin && (
            <Button
              variant="primary"
              onClick={() => {
                setShowAdd(true);
              }}
            >
              add organisation
            </Button>
          )}
          {showAdd && <OrganisationAddForm setShowAdd={setShowAdd} />}
          {filteredOrgs.map((organisation) => {
            return (
              <Card className="border-2 org-text" key={organisation._id}>
                <Card.Header as="h4">{organisation.name}</Card.Header>
                <OrganisationsEditDelete
                 
                  organisation={organisation}
                  removeOrganisationById={removeOrganisationById}
                  updateOrganisation={updateOrganisation}
                  isAdmin={isAdmin}
                />
                <Card.Body>
                  <Card.Text className="h-auto text-description">
                    {organisation.description}
                  </Card.Text>
                  <Card.Text className="h-30 d-inline-block">
                    Location: {organisation.location}
                  </Card.Text>
                </Card.Body>
                <Card.Link className="btn-charity" href={organisation.website}>
                  <Button>View Charity</Button>
                </Card.Link>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
export default Organisations;

//   // const [org, setOrg] = useState([]);
//   const [searchOrg, setSearchOrg] = useState([]);
//   // useEffect(() => {
//   //   fetch("https://staging-well-minded.herokuapp.com/api/organisations/org")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setOrg(data);
//   //     });
//   // }, []);
//   const filteredOrgs = org.filter((data) =>
//     data.name.toLowerCase().includes(searchOrg)
//   );

//   return (
//     <div className="container">
//       <input
//         value={searchOrg}
//         onChange={(e) => setSearchOrg(e.target.value)}
//         className="input-name"
//         type="search"
//         name="from"
//         placeholder="Search Organization"
//       />

//       {filteredOrgs.map((data, index) => {
//         return (
//           <div key={index}>
//             <p className="org-text">{data.name}</p>
//             <a href={data.website}>
//               <img
//                 className="org-img rounded mx-auto d-block img-responsive"
//                 src={data.logo}
//                 alt="Logo"
//               />
//             </a>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Organisations;
