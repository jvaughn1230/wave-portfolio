import React from "react";
import { useInView } from "react-intersection-observer";
import Mailer from "../../components/Mailer/Mailer";
import "./Contact.css";

// Temp
import CurvedContainer from "../../components/CurvedContainer/CurvedContainer";

const Contact = () => {
  const { ref: viewRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
  });

  console.log(sectionVisible);

  return (
    <CurvedContainer>
      <div id="contact" className="section contact-section" ref={viewRef}>
        <div className={`${sectionVisible ? "remove-cover" : ""} cover`}></div>
        <h2 className="section-header">Contact</h2>
        <Mailer />
      </div>
    </CurvedContainer>
  );
};

export default Contact;
