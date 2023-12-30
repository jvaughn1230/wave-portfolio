import React from "react";
import "./SkillCard.css";
import { BsFiletypeJsx } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const SkillCard = (props) => {
  const { ref: cardViewRef, inView: cardVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={`skill-card ${cardVisible ? "show-skill-card" : ""}`}
      ref={cardViewRef}
    >
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
