import React from "react";
import { Container, Col } from "react-bootstrap";

// styles
import "./TheContact.scss";
// components
import TheContactForm from "../components/TheContactForm";

// component

const TheContact = () => {
  return (
    <Container fluid>
      <Col className="col-md-8 mx-auto">
        <h1> Got a Question, Project in mind ?</h1>
        <hr />
        <TheContactForm />
      </Col>
    </Container>
  );
};

export default TheContact;
