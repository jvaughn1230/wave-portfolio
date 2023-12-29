import React from "react";
import "./Animations.css";
import { useInView } from "react-intersection-observer";

// TODO: Add Wave To Header
// TODO: Add Card Flip to Skills
// TODO: Add tranistion to Projects
// TODO: Add bull away to contact form
// TODO: Add Color Change to About Section
// TODO: Add some animation cartoons

const Animations = () => {
  const { ref: viewRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: cardsViewRef, inView: cardsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="full">
      {/* Top Section */}
      <div className="section1">
        <nav className="test-nav">
          <a href="/" className="hover-underline-animation">
            Home
          </a>
          <a href="/" className="hover-underline-animation">
            Home
          </a>
          <a href="/" className="hover-underline-animation">
            Home
          </a>
        </nav>
      </div>

      {/* Wave section */}
      <div className="section2">
        <h3>Top</h3>
        <div className="waves">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Blue Section */}
      <div className="section4">
        <h1>Section 4</h1>
      </div>

      {/* Pullaway section */}
      <div className="section3" ref={viewRef}>
        <div className={`${sectionVisible ? "remove-cover" : ""} cover`}>
          Cover
        </div>
        Section 3
      </div>

      <div className="section5">
        <h1>Section 5</h1>
        <div className="testcard-container" ref={cardsViewRef}>
          <div className={`test-card1 ${cardsVisible ? "showcard" : ""} `}>
            {" "}
          </div>
          <div
            className={`test-card2 ${cardsVisible ? "showcard" : ""} `}
          ></div>
          <div className="pullup-container">
            Pull up
            <div
              className={`hide2 ${cardsVisible ? "reveal-drop" : ""} `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animations;
