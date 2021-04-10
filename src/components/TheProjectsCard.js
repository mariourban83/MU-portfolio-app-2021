import React from "react";
import Col from "react-bootstrap/Col";

const TheProjectsCard = ({ name, description, url, img }) => {
  return (
    <Col className="col-8 col-sm-6 col-md-5 col-lg-3 m-1 project-card">
        <p className="project-name">{name}</p>
        <p className="project-description">{description}</p>
        <a className="github-link" href={url}>
          See on Github...
        </a>
        <img src={img} alt=""width="250px"/>
    </Col>
  );
};
export default TheProjectsCard;
