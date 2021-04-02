import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

// styles
import "./TheNavigation.scss";

const TheNavigation = () => {
  return (
    <Container>
      <nav className="navigation">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </Container>
  );
};

export default TheNavigation;
