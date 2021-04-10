import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


const TheNavigation = () => {
  return (
    <Container fluid>
      <nav className="navigation">
        <Row>
          <Col className="col-4">
            <NavLink to="/" activeClassName="active navlink" exact>
            Home
            </NavLink>
          </Col>
          <Col className="col-4">
            <NavLink to="/projects" activeClassName="active navlink">
            Projects
          </NavLink>
          </Col>
          <Col className="col-4">
            <NavLink to="/contact" activeClassName="active navlink">
            Contact
          </NavLink>
          </Col>
        </Row>
      </nav>
    </Container>
  );
};

export default TheNavigation;
