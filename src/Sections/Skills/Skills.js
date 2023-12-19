import React from "react";
import "./Skills.css";

import { skills } from "../../data/skills";

import SkillCard from "../../components/SkillCard/SkillCard";
import SkillPill from "../../components/SkillPill/SkillPill";

console.log(skills);

const Skills = () => {
  return (
    <div id="skills" className="section">
      <h2 className="section-header">Skills</h2>
      <div className="skills-container">
        <SkillPill skill={skills[0]} />
        {/* <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard /> */}
      </div>
    </div>
  );
};

export default Skills;
