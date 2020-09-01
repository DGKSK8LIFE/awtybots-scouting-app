import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

// Navbar is the navbar component for the app
export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">View Recordings</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/graphs">View Graphs</Nav.Link>
        <Nav.Link href="/create-recording">Create Recordings</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search Recordings"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
