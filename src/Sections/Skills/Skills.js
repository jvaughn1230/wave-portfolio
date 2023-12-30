import React from "react";
import "./Skills.css";

import { skills } from "../../data/skills";

import SkillCard from "../../components/SkillCard/SkillCard";
import SkillPill from "../../components/SkillPill/SkillPill";

import WaveyButton from "../../components/WaveyButton/WaveyButton";

console.log(skills);

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
