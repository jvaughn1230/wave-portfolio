import React from "react";
import "./About.css";
import profilePic from "../../assets/profile-modified.png";
import Line from "../../components/Line/Line";

const About = () => {
  const summary =
    "Hi, I'm Jeffrey a full stack web developer based in Las Vegas NV. I build beautiful webistes using a combination of React, HTML, CSS, Javascript, Bootstrap with Node.js and Express.js on the backend. I love solving complex problems and learning new things! When I'm not programming, I can usually be found out in nature.";

  return (
    <div id="about" className="about-section section">
      <div className="waves">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="about-container">
        <div className="about-col1">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="about-col2">
          <h2 className="section-header about-header">About Me</h2>
          <Line color="white" />
          <p className="about-text">{summary}</p>
          <button href="#skills" className="btn about-btn">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
