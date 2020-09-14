import React, { useEffect, useState } from "react";
import "../../css/Allresources.css";
import ResourceEdRe from "./ResourceEdRe";
import { Card, Button } from "react-bootstrap";

const Allresources = ({
  resource,
  removeResourceById,
  updateResource,
  isAdmin,
}) => {
  const [desc, setDesc] = useState("");

  useEffect(() => {
    resource.name && setDesc(resource.description.substr(0, 150));
  }, []);

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
          {desc}{" "}
          <span
            className="load-more-btn"
            onClick={() => {
              setDesc(resource.description);
            }}
          >
            load more{" "}
          </span>
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
