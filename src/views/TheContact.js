import React from "react";
import { FaGithub, FaLinkedin, FaSkype, FaEnvelope } from "react-icons/fa";

// components
import TheContactForm from "../components/TheContactForm";

// component

const TheContact = () => {
  return (
    <>
      <section className="contact-section fade-in-1">
        <h1>
          Got a Question, <br />
          Project in mind ?
        </h1>
        <p>
          Just send me a message here and I get back to you ASAP!
          <br />
          👌
        </p>
        <TheContactForm />
      </section>
      <section className="social-section">
        <span>
          <FaGithub />
        </span>
        <span>
          <FaLinkedin />
        </span>
        <span>
          <FaSkype />
        </span>
        <span>
          <FaEnvelope />
        </span>
      </section>
      <section className="map-section fade-in-1s">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6833.221893062167!2d-8.637935269430002!3d53.74188522025531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c02588d81da5d%3A0xa00c7a99731dcd0!2sBallinlough%2C%20Co.%20Roscommon%2C%20Ireland!5e1!3m2!1sen!2sus!4v1618524254496!5m2!1sen!2sus"
          width="100%"
          height="400px"
          allowFullScreen=""
        ></iframe>
      </section>
    </>
  );
};

export default TheContact;
