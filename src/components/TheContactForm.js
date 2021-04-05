import React, { useState } from "react";
import { Form } from "react-bootstrap";

function TheContactForm() {
  const [status, setStatus] = useState("Send Message");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending message...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("https://mu-portfolio-messaging.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send Message");

    let result = await response.json();
    alert(result.status);
    // clearing the values
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Form onSubmit={handleSubmit} className="text-center">
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <br />
        <input
          id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Contact Email</label>
        <br />
        <input
          id="email"
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" />
        <br />
        <textarea
          id="message"
          rows={2}
          placeholder="Your message..."
          className="form-control "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="rounded-pill border-white blue-bg mt-3 px-3">
        {status}
      </button>
    </Form>
  );
}

export default TheContactForm;
