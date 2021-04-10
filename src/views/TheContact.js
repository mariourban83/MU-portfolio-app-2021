import React from "react";
import { Container, Col } from "react-bootstrap";

// components
import TheContactForm from "../components/TheContactForm";

// component

const TheContact = () => {
  return (
    <Container fluid>
      <Col className="col-md-8 col-lg-4 mx-auto fade-in-4s">
        <h1> Got a Question, Project in mind ?</h1>
        <p className="pt-2">Feel free to contact me!</p> 
        <p>I’m based in county Roscommon, Ireland.</p>
        <hr />
        <TheContactForm />
      </Col>
    </Container>
  );
};

export default TheContact;
