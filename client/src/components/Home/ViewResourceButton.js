import React from "react";
import "../../css/organisationhelpbtn.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ViewResourcesButton = () => {
  return (
    <Button variant="outline-primary mt-4 mb-4 ml-3">
      <Link to="/resources"> View More Resources </Link>
    </Button>
  );
};
export default ViewResourcesButton;
