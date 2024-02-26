import React from "react";
import "./SkillCard.css";
import { useInView } from "react-intersection-observer";

const SkillCard = ({ skill }) => {
  const { ref: cardViewRef, inView: cardVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={`skill-card ${cardVisible ? "show-skill-card" : ""}`}
      ref={cardViewRef}
    >
      <div className="skillcard-content">
        {skill.icon}
        <h3>{skill.name}</h3>
        <p>{skill.summary}</p>
      </div>
    </div>
  );
};

export default SkillCard;
