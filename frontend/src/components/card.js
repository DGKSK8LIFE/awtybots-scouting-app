import React from "react";
import { Card, Button } from "react-bootstrap";

// Card returns a card view of team data
export default function Card(props) {
  return (
    <Card>
      <Card.Header as="h5">{props.obj.team}</Card.Header>
      <Card.Body>
        <ul>
          <li>ID: {props.obj.id}</li>
          <li>Team: {props.obs.team}
          <li>Starting Location: {props.obs.startingLocation}</li>
          <li>Moved?: {props.obj.moved}</li>
          <li>Inner Port Shots: {props.obj.innerPort}</li>
          <li>Outer Port Shots: {props.obj.outerPort}</li>
          <li>Lower Port Shots: {props.obj.lowerPort}</li>
          <li>Control Panel Stage Two?: {props.obj.controlPanelStageTwo}</li>
          <li>
            Control Panel Stage Three?: {props.obj.controlPanelStageThree}
          </li>
          <li>Hangtime: {props.obj.hangTime}</li>
          <li>Time: {props.obj.time}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}
