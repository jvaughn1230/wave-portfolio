import React from "react";
import Mailer from "../../components/Mailer/Mailer";
import "./Contact.css";

// Temp
// import CurvedContainer from "../../components/CurvedContainer/CurvedContainer";

const Contact = () => {
  return (
    <div>
      <div id="contact" className="section contact-section">
        {/* <div className={`${sectionVisible ? "remove-cover" : ""} cover`}></div> */}
        <h2 className="section-header">Contact</h2>
        <Mailer />
      </div>
    </div>
  );
};

export default Contact;
