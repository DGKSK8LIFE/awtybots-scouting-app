import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import NavBar from "../components/navbar";
import axios from "axios";
import '../assets/create.css';

const formState = {
  team: null,
  startingLocation: null,
  moved: null,
  innerPort: null,
  outerPort: null,
  lowerPort: null,
  controlPanelStageTwo: null,
  controlPanelStageThree: null,
  hangTime: null,
};

const submitForm = () => {
  axios.post("http://localhost:8080/api/create-recording", { formState });
};

export default function Create() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <br></br>
      <div className="create">
        <h1>Create a Recording</h1>
        <br></br>
        <Form>
          <Form.Group controlId="formGroupTeam">
            <Form.Control
              type="number"
              placeholder="Enter team"
              required
              value={formState.team}
            />
          </Form.Group>
          <Form.Group controlId="formGroupStartingLocation">
            <Form.Label as="legend" column sm={2}>
              Starting Location
            </Form.Label>
            <Col sm={10} value={formState.startingLocation}>
              <Form.Check label="left" />
              <Form.Check label="center" />
              <Form.Check label="right" />
            </Col>
          </Form.Group>
          <Form.Group controlId="formGroupMoved?">
            <Form.Label as="legend" column sm={2}>
              Moved?
            </Form.Label>
            <Col sm={10} value={formState.moved}>
              <Form.Check label="yes" />
              <Form.Check label="no" />
            </Col>
          </Form.Group>
          <Form.Group controlId="formGroupInnerPort">
            <Form.Control
              type="number"
              placeholder="Number of balls shot into the inner port"
              required
              value={formState.innerPort}
            />
          </Form.Group>
          <Form.Group controlId="formGroupOuterPort">
            <Form.Control
              type="number"
              placeholder="Number of balls shot into the outer port"
              required
              value={formState.outerPort}
            />
          </Form.Group>
          <Form.Group controlId="formGroupLowerPort">
            <Form.Control
              type="number"
              placeholder="Number of balls shot into the lower port"
              required
              value={formState.lowerPort}
            />
          </Form.Group>
          <Form.Group controlId="formGroupControlPanelStageTwo">
            <Form.Label as="legend" column sm={2}>
              Control Panel Stage Two?
            </Form.Label>
            <Col sm={10} value={formState.controlPanelStageTwo}>
              <Form.Check label="yes" />
              <Form.Check label="no" />
            </Col>
          </Form.Group>
          <Form.Group controlId="formGroupControlPanelStageThree">
            <Form.Label as="legend" column sm={2}>
              Control Panel Stage Three
            </Form.Label>
            <Col sm={10} value={formState.controlPanelStageThree}>
              <Form.Check label="yes" />
              <Form.Check label="no" />
            </Col>
          </Form.Group>
          <Form.Group controlId="formGroupHangtime">
            <Form.Control
              type="number"
              placeholder="Enter hangtime"
              value={formState.hangTime}
            />
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onclick={submitForm()} variant="dark">
                Create Recording
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
}
