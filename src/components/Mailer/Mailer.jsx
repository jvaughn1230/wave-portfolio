import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Mailer.css";

const Mailer = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g6irf6a",
        "template_dhr2msr",
        form.current,
        "ZbEPU1Szv0ExY3Urq"
      )
      .then((res) => {
        console.log("SUCCESS!", res);
        setValues({
          name: "",
          email: "",
          message: "",
        });
        setStatus("SUCCESS");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mailer-container">
      {status && alert()}
      <form onSubmit={handleSubmit} ref={form} className="mailer">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        <button type="submit" className="btn mailer-btn">
          Send
        </button>
      </form>
    </div>
  );
};

// Alert
const alert = () => {
  return (
    <div>
      <p>Your Message Submitted Successfully!</p>
    </div>
  );
};

export default Mailer;
