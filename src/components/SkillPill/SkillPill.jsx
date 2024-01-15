import React from "react";
import "./SkillPill.css";

import { SiRedux } from "react-icons/si";

const SkillPill = ({ skill }) => {
  const icon = skill.icon.name;

  const type = typeof icon;

  return (
    <div className="bubble">
      <SiRedux className="skill-icon" />
    </div>
  );
};

export default SkillPill;
