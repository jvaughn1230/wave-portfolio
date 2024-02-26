import React from "react";
import Mailer from "../../components/Mailer/Mailer";
import "./Contact.css";
// import { GiTropicalFish } from "react-icons/gi";

const Contact = () => {
  return (
    <div id="contact" className="section contact-section">
      {/* <GiTropicalFish className="contact-fish contact-fish-1" />
      <GiTropicalFish className="contact-fish contact-fish-2" />
      <GiTropicalFish className="contact-fish contact-fish-3" /> */}

      <h2 className="section-header">Contact</h2>
      <Mailer />
    </div>
  );
};

export default Contact;
