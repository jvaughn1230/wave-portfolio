import React from "react";
import "./About.css";
import profilePic from "../../assets/profile-modified.png";
import Line from "../../components/Line/Line";

const About = () => {
  return (
    <div id="about" className="about-section section">
      <div className="about-container">
        <div className="about-col1">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="about-col2">
          <h2 className="section-header about-header">About Me</h2>
          <Line color="white" />
          <div>Summary</div>
          <button>Get Started!</button>
        </div>
      </div>
    </div>
  );
};

export default About;
