import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Card(props) {
    return (
        <Card>
            <Card.Header as="h5">{props.team}</Card.Header>
            <Card.Body>
               <ul>
                   <li>
                      ID: {props.id}  
                   </li>
                   <li>
                      Starting Location: {props.startingLocation}
                   </li>
                   <li>
                      Moved?: {props.moved}
                   </li>
                   <li>
                      Inner Port Shots: {props.innerPort}
                   </li>
                   <li>
                      Outer Port Shots: {props.outerPort}
                   </li>
                   <li>
                       Lower Port Shots: {props.lowerPort}
                   </li>
                   <li>
                       Control Panel Stage Two?: {props.controlPanelStageTwo}
                   </li>
                   <li>
                       Control Panel Stage Three?: {props.controlPanelStageThree}
                   </li>
                   <li>
                       Hangtime: {props.hangTime}                       
                   </li>
                   <li>
                       Time: {props.time}
                   </li>
               </ul> 
            </Card.Body>
        </Card>
    );
}