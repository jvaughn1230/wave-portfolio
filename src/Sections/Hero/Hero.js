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
        <button className="hero-btn btn" href="#about">
          Find Out More
        </button>
      </div>

      {/* Bubbles */}
      <div className="bubble-wrapper">
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
