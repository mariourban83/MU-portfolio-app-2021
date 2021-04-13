import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

const TheNavigation = () => {
  return (
    <Container fluid className="main-nav">
      <nav className="navigation">
        <NavLink to="/" activeClassName="active navlink text-right" exact>
          Home
        </NavLink>

        <NavLink to="/projects" activeClassName="active navlink">
          Projects
        </NavLink>

        <NavLink to="/contact" activeClassName="active navlink text-left">
          Contact
        </NavLink>
      </nav>
    </Container>
  );
};

export default TheNavigation;
