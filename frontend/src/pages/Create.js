import React from "react";
import { Form, Col, Row } from "react-bootstrap";
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
        <Form.Group controlId="formGroupStartingLocation" as={Row}>
          <Form.Label as="legend" column sm={2}>
            Starting Location
          </Form.Label>
          <Col sm={10}>
            <Form.Check 
              label="left"
            />
            <Form.Check 
              label="center"
            />
            <Form.Check 
              label="right"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label as="legend" column sm={2}>
            Moved?
          </Form.Label>
          <Col sm={10}>
            <Form.Check 
            label="yes"
            />
            <Form.Check 
              label="no"           
            />

          </Col>
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
