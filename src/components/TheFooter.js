import React from 'react'

import { Container, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaTelegram, FaSkype } from "react-icons/fa";



const TheFooter = () => {
    return (
      <>
        <Container className="text-white">
          <br />
          <hr />
          <Col className="col-12 col-md-6 mx-auto text-center">
            <h1>
              <a
                href="https://www.linkedin.com/in/mariourban83/"
                className="pr-2 text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mariourban83"
                className="px-3 text-white"
              >
                <FaGithub />
              </a>
              <a href="https://telegram.org" className="px-3 text-white">
                <FaTelegram />
              </a>
              <a
                href="skype:live:mario.urban.83?chat"
                className="pl-2 text-white"
              >
                <FaSkype />
              </a>
            </h1>
          </Col>
          <br />
          <small className="text-white mt-5">
            Made by me 🍀 2021
            <br />
            🍪 -No Cokies, I'm not collecting your data.- 🍪
          </small>
        </Container>
      </>
    );
}

export default TheFooter