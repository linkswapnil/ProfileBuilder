import React from "react";
import "./Header.scss";
import { Navbar, Nav, Button } from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="hp-logo"
            src="https://www8.hp.com/us/en/images/THP_S_K_RGB_150_LG_Ctcm2451096197_Ttcm245108559832_F.png"
            width="30"
            height="30"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-right">
            <Nav.Link className="mt-1 text-white" href="#deets">
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
  }
}
