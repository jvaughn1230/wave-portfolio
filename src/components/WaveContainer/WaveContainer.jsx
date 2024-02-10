import React from "react";
import "./wave-container.css";

const WaveContainer = ({ children }) => {
  return (
    <div className="wave-container">
      {children}
      <div className="waves">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default WaveContainer;
