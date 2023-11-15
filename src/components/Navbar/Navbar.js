import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // Sections
  const sections = ["about", "skills", "projects", "contact"];
  const newLink = (section, index) => (
    <a
      key={index}
      href={`#${section}`}
      className={`navba-link ${scroll && "navbar-links-scrolled"}`}
    >
      {section}
    </a>
  );
  const sectionLinks = sections.map(newLink);

  //   Color Change Effect
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={`navbar ${scroll && "navbar-scrolled"}`}>
      <div className="navbar-logo">Jeffrey Vaughn</div>
      <div className="navbar-links">
        <GiHamburgerMenu className="navbar-menu" />
        {sectionLinks}
      </div>
    </div>
  );
};

export default Navbar;
