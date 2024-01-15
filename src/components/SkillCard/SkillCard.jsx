import React from "react";
import "./SkillCard.css";
import { BsFiletypeJsx } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const SkillCard = ({ skill }) => {
  const { ref: cardViewRef, inView: cardVisible } = useInView({
    triggerOnce: true,
  });

  // console.log("retrieved skill = " + skill);
  console.log(skill.icon);

  return (
    <div
      className={`skill-card ${cardVisible ? "show-skill-card" : ""}`}
      ref={cardViewRef}
    >
      <div className="skillcard-content">
        {/* <BsFiletypeJsx size={40} className="skill-icon" /> */}
        {/* < {skill.icon} /> */}
        {skill.icon}
        <h3>{skill.name}</h3>
        <p>{skill.summary}</p>
      </div>
    </div>
  );
};

export default SkillCard;
