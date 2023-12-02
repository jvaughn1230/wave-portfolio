import React from "react";
import "./Hero.css";
import Navbar from "../../components/Navbar/Navbar";
import Line from "../../components/Line/Line";

const Hero = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-text">
        <div className="hero-header"> Hello, I'm Jeffrey Vaughn! </div>
        <Line color="blue" />
        <div className="hero-subtext">
          I'm a fullstack developer based in Las Vegas, NV
        </div>
      </div>
    </div>
  );
};

export default Hero;
