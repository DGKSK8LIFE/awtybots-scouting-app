import React from "react";
import { Form } from "react-bootstrap";
import NavBar from "../components/navbar";

export default function Create() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <br></br>
      <Form>
        <Form.Group controlId="formGroupTeam">
          <Form.Control type="number" placeholder="Enter team" />
        </Form.Group>
        <Form.Group controlId="formGroupInnerPort">
          <Form.Control type="number" placeholder="Enter inner port score" />
        </Form.Group>
        <Form.Group controlId="formGroupOuterPort">
          <Form.Control type="number" placeholder="Enter outer port score" />
        </Form.Group>
        <Form.Group controlId="formGroupLowerPort">
          <Form.Control type="number" placeholder="Enter lower port score" />
        </Form.Group>
        <Form.Group controlId="formGroupHangtime">
          <Form.Control type="number" placeholder="Enter hangtime" />
        </Form.Group>
      </Form>
    </React.Fragment>
  );
}
