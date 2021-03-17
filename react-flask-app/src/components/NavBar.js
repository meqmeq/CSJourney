import React from "react";
import "../App.css";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand href="#home">TheCSJourneyMan</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link className="item">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="item">About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="item">Contact</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <LinkContainer to="/stack">
                <NavDropdown.Item className="item">Stack</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
