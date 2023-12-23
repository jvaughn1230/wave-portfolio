import React from "react";
import "./Animations.css";
import { useInView } from "react-intersection-observer";

const Animations = () => {
  const { ref: viewRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="full">
      {/* Top Section */}
      <div className="section1">Section 1</div>

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
    </div>
  );
};

export default Animations;
