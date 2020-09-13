import React from "react";
import "../../css/Allresources.css"
import ResourceEdRe from "./ResourceEdRe"
import { Card,Button } from "react-bootstrap";


const Allresources = ({ 
  resource,
  removeResourceById,
  updateResource,
  isAdmin
 }) => {
  return (
    <Card className="mb-3">
      <Card.Header as="h4">
        {resource.name}
        <div className="float-right">
          <ResourceEdRe
            resource={resource}
            removeResourceById={removeResourceById}
            updateResource={updateResource}
            isAdmin={isAdmin}
          />
        </div>
      </Card.Header>

      <Card.Body>
        <Card.Text className="resource-cardtxt">
          {resource.description}
        </Card.Text>
        <Button
          className="btn-nextlink float-right"
          size="sm"
          href={resource.website}
        >
          Visit Website
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Allresources;
