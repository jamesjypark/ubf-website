import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../../res/logo/ubf_logo_white.png";

import "./Header.css";

const Header = () => {
  return (
    <Navbar variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="UBF logo"
          />
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Link href={`/#/about`} className="justify-content-end">
            About
          </Nav.Link>
          {/* <Nav.Link href={`/#/events`} className="justify-content-end">
            Events
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
