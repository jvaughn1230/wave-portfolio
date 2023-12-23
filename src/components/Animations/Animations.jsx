import React from "react";
import "./Animations.css";
import Wave3 from "../wave3/Wave3";

const Animations = () => {
  return (
    <div className="full">
      <div className="section1">Section 1</div>
      <div className="section2">
        <Wave3 />
      </div>
      <div className="section3">
        Section 3<div className="cover">Cover</div>
      </div>
      <div className="section4">Section 4</div>
    </div>
  );
};

export default Animations;
