import React from 'react'

import { Container, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaTelegram, FaSkype } from "react-icons/fa";


const TheFooter = () => {
    return (
      <>
        <Container className="footer">
        <hr/>
          <Col className="col-12 col-md-8 mx-auto text-center">
          
              <a
                href="https://www.linkedin.com/in/mariourban83/"
                className="footer-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mariourban83"
                className="footer-icon"
              >
                <FaGithub />
              </a>
              <a href="https://telegram.org" className="footer-icon">
                <FaTelegram />
              </a>
              <a
                href="skype:live:mario.urban.83?chat"
                className="footer-icon"
              >
                <FaSkype />
              </a>
          </Col>
          <small className="text-white mt-5">
            Made by Mario Urban 🍀 2021
          </small>
        </Container>
      </>
    );
}

export default TheFooter