import React from "react";
import { Row, Col } from "react-bootstrap";

const TheProjectsCard = ({ name, description, url, img }) => {
  return (
    <Col className="col-11 col-sm-8  col-lg-5 m-3 project-card fade-in-1s">
      <p className="project-name">{name}</p>
      <Row>
        <Col className="col-6">
          <p className="project-description">{description}</p>
        </Col>
        <Col className="col-6">
          <a href={url}>
            <img 
              src={img} 
              alt=""
              className="repo-image"
            />
          </a>
        </Col>
      </Row>
    </Col>
  );
};
export default TheProjectsCard;
