import React from "react";
import "../../css/organisationhelpbtn.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const OrganisationHelpButton = () => {
  return (
    <Button className="help-btn" variant="outline-primary mt-4 mb-4">
      <Link to="/organisations"> Find Organisation to help </Link>
    </Button>
  );
};
export default OrganisationHelpButton;
