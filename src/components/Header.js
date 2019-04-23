import React from "react";
import "./Header.scss";
import { Navbar, Nav, Button } from "react-bootstrap";

export const Header = props => {
  return (
    <Navbar
      className="head"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mr-t4 text-white" href="#deets">
            New User
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <Button variant="primary" size="sm">
              Login
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
