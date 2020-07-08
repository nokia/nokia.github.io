import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";

const navBarStyle = {
  backgroundColor: "#EDF3F5",
  marginBottom: "1.5rem",
};

const NavigationBar = () => {
  return (
    <div style={navBarStyle}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt=""
                style={{ maxWidth: 80, display: "block" }}
              />
            </Navbar.Brand>
            <Nav.Link href="#" as="span">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/repositories">Repositories</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
