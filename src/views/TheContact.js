import React from "react";
import { Col } from "react-bootstrap";

// styles
import "./TheContact.scss";

// component

const TheContact = () => {
  return (
    <Col className="col-12 col-sm-8 col-md-7 mx-auto">
      <h1> Got a Question, Project in mind ?</h1>
      <hr />

      <form
        className="gform pt-3"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbzWVwEnsBg8m_fJ_LGTEF5YZTqABRbjxmZ_qTpu93VrqrVHsK4uuKs86AdFDQrS6j3m/exec"
      >
        <label>
          Your Name
          <br />
          <input type="text" name="From" className="m-1" />
        </label>
        <br />
        <label>
          Your email
          <br />
          <input type="email" name="Email" className="m-1" />
        </label>
        <br />
        <label>
          Message
          <br />
          <input type="textarea" name=" Message" className="m-1" />
        </label>
        <br />
        <input
          type="submit"
          value="Send Message"
          className="rounded-pill blue-bg mt-3 px-3"
        />
      </form>
    </Col>
  );
};

export default TheContact;
