import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Typist from "react-typist";

// styles
import "./TheHome.scss";

// assets
import profilePic from "../assets/ProfilePictureBlueRing.png";

// component
const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="col-12 col-md-6">
          <img
            className="img-fluid pb-3"
            src={profilePic}
            alt="dev logo"
            width="250"
          />
          <h3>
            Hi, I'm Mario , <br /> Software & Web <br /> Developer.
          </h3>
        </Col>
        <Col className="col-12 col-md-6  m-auto p-4 ">
          <h3>A bit about me</h3>
          <p className="lead">
            I'm passionate about blockchain and cryptocurrencies, virtualization
            technologies like KVM, Vagrant or Docker and Linux. As I'm currently
            looking for a job, prefferably as blockchain or backend developer,
            feel free to contact me, I'm ready to join your team. 🖋
          </p>
        </Col>
      </Row>
      <Col className="col-12 col-sm-7 rounded-bg mx-auto my-5 blue-bg text-dark p-1 d-block">
        <Typist cursor={{ show: false }}>
          <h3 className="text-dark pt-3">Technologies I ..</h3>
        </Typist>
      </Col>
      <Row>
        <Col className="col-12 col-md-4 mt-3">
          <h3>..LIKE 💙</h3>
          <hr />
          <p className="lead">
            Python <br />
            Javascript <br />
            React <br />
            Docker <br />
            Linux <br />
            Git & Github
          </p>
        </Col>
        <Col className="col-12 col-md-4 mt-3">
          <h3>..WAS EXPOSED TO 🖥️</h3>
          <hr />
          <p className="lead">
            Blockchain <br />
            Flask & Django <br />
            AWS , GCP, <br />
            SQL , MongoDb <br />
            Heroku <br />
            Vagrant , KVM <br />
          </p>
        </Col>
        <Col className="col-12 col-md-4 mt-3">
          <h3>..PLAN GET INTO 📌</h3>
          <hr />
          <p className="lead">
            Vue <br />
            Angular <br />
            Kubernetes <br />
            Ethereum
            <br />
            Serverless Technology
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
