import React, { useRef7 } from "react";
import { useInView } from "react-intersection-observer";
import Mailer from "../../components/Mailer/Mailer";
import "./Contact.css";

const Contact = () => {
  const { ref: viewRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="contact" className="section contact-section" ref={viewRef}>
      <div className={`${sectionVisible ? "remove-cover" : ""} cover`}></div>
      <h2 className="section-header">Contact</h2>
      <Mailer />
    </div>
  );
};

export default Contact;
