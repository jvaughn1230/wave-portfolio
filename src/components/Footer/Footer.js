import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = ["about", "skills", "projects", "contact"];
  const newLink = (section, index) => (
    <a key={index} href={`#${section}`} className="footer-link">
      {section}
    </a>
  );
  const sectionLinks = sections.map(newLink);

  return (
    <div className="footer">
      <div className="footer-links-container">{sectionLinks}</div>
      <p>{` ©Jeffrey Vaughn ${currentYear}`}</p>
    </div>
  );
};

export default Footer;
