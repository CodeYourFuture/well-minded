import React from "react";
import "../../css/organisationhelpbtn.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const OrganisationHelpButton = () => {
  return (
    <Button variant="outline-primary mt-4 mb-4 mr-3">
      <Link to="/organisations"> Find Organisation to help </Link>
    </Button>
  );
};
export default OrganisationHelpButton;
