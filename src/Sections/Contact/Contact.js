import React from "react";
import Mailer from "../../components/Mailer/Mailer";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="section contact-section">
      <h2 className="section-header">Contact</h2>
      <Mailer />
    </div>
  );
};

export default Contact;
