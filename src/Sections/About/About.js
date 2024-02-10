import React from "react";
import "./About.css";
import profilePic from "../../assets/profile-modified.png";
import Line from "../../components/Line/Line";
import CurvedContainer from "../../components/CurvedContainer/CurvedContainer";

const About = () => {
  const summary =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum. Amet justo donec enim diam vulputate ut. Non curabitur gravida arcu ac tortor dignissim convallis aenean et.";

  return (
    <CurvedContainer>
      <div id="about" className="about-section section">
        <div className="about-container">
          <div className="about-col1">
            <img src={profilePic} alt="profile" />
          </div>
          <div className="about-col2">
            <h2 className="section-header about-header">About Me</h2>
            <Line color="white" />
            <p className="about-text">{summary}</p>
            <a href="#skills" className="btn about-btn">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </CurvedContainer>
  );
};

export default About;
