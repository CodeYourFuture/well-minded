import React from "react";
import "../../css/Organisation.css";
import { Card } from "react-bootstrap";

const Entry = () => {
  return (
          <Card className="entry-text border-2 mt-3 justify-center">
            <Card.Body>
              <Card.Text>
                We are building a web application that brings together
                organisations that offer free support and mental health
                resources. As an alternative to the NHS, some people are looking
                for free professional support and this information is not always
                easy to access.
              </Card.Text>
            </Card.Body>
          </Card>
   
  );
};
export default Entry;
