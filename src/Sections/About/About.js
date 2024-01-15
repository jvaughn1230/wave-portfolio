import React from "react";
import "./About.css";
import profilePic from "../../assets/profile-modified.png";
import Line from "../../components/Line/Line";

const About = () => {
  const summary =
    "Hi, I'm Jeffrey a full stack developer based in Las Vegas NV. I love solving complex problems, and the love is what drove me into programming. I enjoy implementing complex CSS to create standout webpages, and I enjoy writing clean, efficient and scalable code. I cofounded DinoBeach Dev - a small web development startup focused on developing beautiful and fun websites. In my free time, I enjoy driving out to the mountains and enjoying some peace and quiet in nature.";

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
