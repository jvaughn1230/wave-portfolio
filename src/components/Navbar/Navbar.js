import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);

  // Sections
  const sections = ["about", "skills", "projects", "contact"];
  const newLink = (section) => (
    <a href={`#${section}`} className="navbar__link">
      {section}
    </a>
  );
  const sectionLinks = sections.map(newLink);

  //   Color Change Effect
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  console.log(color);

  return (
    <div className="navbar">
      <div className="navbar-logo">Jeffrey Vaughn</div>
      <div className="navbar-links">{sectionLinks}</div>
    </div>
  );
};

export default Navbar;
