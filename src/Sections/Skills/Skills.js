import React from "react";
import "./Skills.css";

import SkillCard from "../../components/SkillCard/SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="section">
      <h2 className="section-header">Skills</h2>
      <div className="skills-container">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
