import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // Mobile Menu Toggler
  const handleMenuToggle = () => setOpenNav(!openNav);

  // Section Links
  const sections = ["about", "skills", "projects", "contact"];
  const newLink = (section, index) => (
    <a
      key={index}
      href={`#${section}`}
      className={`navbar-link ${scroll && "navbar-links-scrolled"}`}
      onClick={() => handleMenuToggle()}
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
      <h1 className="navbar-logo">
        <a href="#main">Jeffrey Vaughn</a>
      </h1>

      {/* Nav Links */}
      <div className="navbar-links">
        {/* Hamburger on Mobile */}
        <GiHamburgerMenu
          onClick={() => handleMenuToggle()}
          size={60}
          className="hamburger-menu"
        />
        {/* Links Container */}
        <div
          className={`${openNav ? "show-nav" : "hide-nav"} links-container `}
        >
          {sectionLinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
