import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid className="fade-in-1s main-home">
        <Col className="col-12 col-lg-10 mx-auto mt-4 section-1 ">
          <Row>
            <Col className="col-10 col-lg-5 mx-auto">
              <h1>Hi, I'm Mario</h1>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/profilePic.png`}
                alt="myself"
              />
              <h2> Fullstack Web & Software Developer</h2>
            </Col>
            <Col className="col-10 col-lg-5 mx-auto my-auto">
            <h1>About Me</h1>
            <p>
              I'm Code Institute Ireland 2020, First Class Honour graduate and
              multi-talented human. Most of my time I design and build web
              applications. What I started with Wordpress or Shopify nearly 8 years ago, continues now with frontend development technologies Like React, Vue and others. And it keeps going and I keep growing with it. What a ride 👍
            </p>
            <p>
              Anyway, I don’t like to define myself by the work I’ve done. I define myself
              by the work I want to do. Skills can be taught, personality is
              inherent. I prefer to keep learning new things daily, continue challenging myself,
              and do interesting things that matter to me...
            </p>
            </Col>
          </Row>
        </Col>
        <Col className="col-12 col-lg-10  mx-auto my-auto">
          <Row>
            <Col className="col-10 col-lg-5 mx-auto py-auto section-2">
              <h3 className="pb-4"> My Soft skills</h3>
              <ul>
                <li>⚬ Team player</li>
                <li>⚬ Collaborative mindset and open-minded</li>
                <li>⚬ Motivated to take on new challenges</li>
                <li>⚬ Strong sense for general awareness & self awareness</li>
                <li>⚬ Open and adoptable to changes and unexpected obstacles</li>
                <li>⚬ Self-organized and able to work independently</li>
                <li>⚬ Good at stress management</li>
              </ul>
            </Col>
            <Col className="col-10 col-lg-5 mx-auto section-3">
            <h3 className="pb-4"> My Hard skills</h3>
            <ul>
              <li>⚬ User-centric mindset for problem solving</li>
              <li>⚬ Ability to work and juggle between multiple projects</li>
              <li>⚬ Diligence and attention to detail</li>
              <li>
                ⚬ High self-motivation in working individually or whithin a teams
              </li>
              <li>⚬ Understanding the overall market and competitive space</li>
              <li>⚬ Inter-personal and organizational skills</li>
              <li>⚬ Foundation in Marketing and Advertising</li>
            </ul>
          </Col>
          </Row>
        </Col>
      <Col className="col-12 col-lg-10 section-4 mx-auto">
      <Row>
        <Col className="col-12 mx-auto">
          <h3 className="py-3">My Technical Skills</h3>
          <Row>
            <Col className="col-10 col-md-6 col-lg-4 mx-auto bg-gradient">
              <h4 className="py-3">
                Programming <br />& Languages
              </h4>
              <ul>
                <li> Python</li>
                <li> Javascript</li>
                <li> MySQL & MongoDB</li>
                <li> HTML & CSS</li>
              </ul>
            </Col>
            <Col className="col-10 col-md-6 col-lg-4 mx-auto">
              <h4 className="py-3">
                Framework <br />& Libraries
              </h4>
              <ul>
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Django</li>
                <li>Flask</li>
              </ul>
            </Col>
            <Col className="col-10 col-md-6 col-lg-4 mx-auto">
              <h4 className="py-3">
                Tools <br />& Cloud Tech
              </h4>
              <ul>
                <li>Linux</li>
                <li>Docker</li>
                <li>Git + VScode</li>
                <li>AWS & GCP</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      </Col>
      <Col className="col-12 col-lg-10  mx-auto">
      <Row>
        <Col className="col-10 col-md-5 mx-auto py-5 section-5">
          <h3 className="pb-3">
            Things
            <br />I love
          </h3>
          <ul>
            <li>Learning new things </li>
            <li>Spending time in the nature with family and my dogs</li>
            <li>Animals, Sport and my DIY projects</li>
          </ul>
        </Col>
        <Col className="col-10 col-md-5 mx-auto pt-5 mb-5 section-6">
          <h3 className="pb-3">
            My <br />
            Weaknesses
          </h3>
          <ul>
            <li>Making decisions quickly or too hastily</li>
            <li>Difficulty seeing things from outside my own perspective</li>
            <li>Lack of motivation if I’m not being challanged</li>
          </ul>
        </Col>
      </Row>
      </Col>
      </Container>
    </>
  );
};

export default Home;
