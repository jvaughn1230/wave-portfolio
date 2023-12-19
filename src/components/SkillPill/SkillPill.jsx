import React from "react";
import "./SkillPill.css";

import { SiRedux } from "react-icons/si";

const SkillPill = ({ skill }) => {
  console.log(skill);
  const icon = skill.icon.name;
  console.log(skill.icon.name);
  console.log(icon);

  const type = typeof icon;
  console.log(type);

  return (
    <div className="bubble">
      <SiRedux className="skill-icon" />
    </div>
  );
};

export default SkillPill;
