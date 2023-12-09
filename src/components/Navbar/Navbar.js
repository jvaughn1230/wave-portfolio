import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // Section Links
  const sections = ["about", "skills", "projects", "contact"];
  const newLink = (section, index) => (
    <a
      key={index}
      href={`#${section}`}
      className={`navbar-link ${scroll && "navbar-links-scrolled"}`}
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

  // Mobile Menu Toggler
  const handleMenuToggle = () => setOpenNav(!openNav);

  return (
    <div className={`navbar ${scroll && "navbar-scrolled"}`}>
      <div className="navbar-logo">Jeffrey Vaughn</div>
      <div className="navbar-links">
        {/* Desktop Links */}
        <div className="desktop-links-container">{sectionLinks}</div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => handleMenuToggle()}
          />
          <div className={`${openNav ? "mobile-links-container" : "hide"}`}>
            {sectionLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
