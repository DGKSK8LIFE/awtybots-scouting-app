import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Card(props) {
    return (
        <Card>
            <Card.Header as="h5">{props.teamName}</Card.Header>
            <Card.Body>
               <ul>
               </ul> 
            </Card.Body>
        </Card>
    );
}