import React from "react";
import "./Line.css";

const Line = ({ color }) => {
  return (
    <div
      className={`${color === "white" ? "white-line" : "blue-line"} line`}
    ></div>
  );
};

export default Line;
