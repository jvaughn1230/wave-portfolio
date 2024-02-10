import React from "react";
import "./Hero.css";
import Line from "../../components/Line/Line";
import WaveContainer from "../../components/WaveContainer/WaveContainer";

const Hero = () => {
  return (
    <WaveContainer>
      <div className="hero-section">
        <div className="hero-text">
          <div className="hero-header"> Hello, I'm Jeffrey Vaughn! </div>
          <Line color="blue" />
          <div className="hero-subtext">
            I'm a fullstack developer based in Las Vegas, NV
          </div>
          <a className="hero-btn btn" href="#about">
            Find Out More
          </a>
        </div>

        {/* Bubbles */}
        <div className="bubble-wrapper">
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </WaveContainer>
  );
};

export default Hero;
