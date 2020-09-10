import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function InputResSearch({ searchResource, setSearchResource }) {
  return (
    <InputGroup className=" p-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Search </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        placeholder="search......"
        value={searchResource}
        onChange={(e) => {
          setSearchResource(e.target.value);
        }}
      />
    </InputGroup>
  );
}
export default InputResSearch;
