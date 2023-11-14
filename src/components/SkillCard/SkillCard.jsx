import React from "react";
import "./SkillCard.css";
import { BsFiletypeJsx } from "react-icons/bs";

const SkillCard = (props) => {
  return (
    <div className="skillCard">
      <BsFiletypeJsx size={40} className="skill-icon" />
      <h3>React Developer</h3>
      <p>
        React is my favorite programming language to build fast loading
        websites. I have experience integrating various React libraries
        inlcuindg React Router, Axios.
      </p>
    </div>
  );
};

export default SkillCard;
