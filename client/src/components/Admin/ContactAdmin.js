import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import Message from "./Message"
import {Container, Row, Col} from "react-bootstrap"

const Messages = ({ contactMessages, setContactMessages, isAdmin }) => {
    const [showMessages, setShowMessages] = useState(false);
  
return(
    <Container >
        <Row>
            <Col>
        <Table responsive="sm">
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Comment</th>
          </tr>
        </thead>
       
        {contactMessages.map(message => 
        <tbody className="row-elements">
        <Message message={message} />
        </tbody>
    )}

      </Table>
      </Col>
      </ Row>
    </ Container>
)
}

export default Messages;