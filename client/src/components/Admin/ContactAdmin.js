import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import Message from "./Message"
import {Container, Row, Col} from "react-bootstrap"

const Messages = ({ contactMessages, setContactMessages, isAdmin }) => {
    const [showMessages, setShowMessages] = useState(false);
    const filterMessage = contactMessages.slice(0, 4)
    const handleSHowMoreMessages = ()=>(console.log("hello"))
return(
    <Container >
        <Row>
            <Col>
        <Table responsive bordered hover >
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Comment</th>
          </tr>
        </thead>
       
        {filterMessage.map(message => 
        <tbody className="row-elements">
        <Message  message={message} />
        </tbody>
    )}

      </Table>
      <button onClick={handleSHowMoreMessages}>Show more</button>
      </Col>
      </ Row>
    </ Container>
)
}

export default Messages;