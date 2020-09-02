import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../assets/navbar.css";

// Navbar is the navbar component for the app
export default function NavBar() {
  return (
    <div className="navbar">
      <Navbar>
        <Navbar.Brand href="/">View Recordings</Navbar.Brand>
        <div className="text">
          <Nav className="mr-auto">
            <Nav.Link href="/graphs">View Graphs</Nav.Link>
            <Nav.Link href="/create-recording">Create Recordings</Nav.Link>
          </Nav>
        </div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Recordings"
            className="mr-sm-2"
          />
          <Button variant="dark">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
