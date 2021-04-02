import React from "react";
import Col from "react-bootstrap/Col";
import "./TheProjectsCard.scss";
import { FaGithub } from "react-icons/fa";

const TheProjectsCard = ({ name, description, url }) => {
  return (
    <Col className="col-10 col-md-5 col-xl-3 m-3 p-2 text-dark bg-light rounded">
      <Col>
        <h4 className="black">{name}</h4>
        <small>{description}</small>
        <br />
        <hr />
      </Col>
      <Col className="blue-bg rounded-pill mb-2">
        <a className=" pb-5" href={url}>
          See on Github ..
          <span>
            <FaGithub />
          </span>
        </a>
      </Col>
    </Col>
  );
};
export default TheProjectsCard;
