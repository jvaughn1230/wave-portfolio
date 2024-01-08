import React from "react";
import "./Skills.css";

import { skills } from "../../data/skills";

import SkillCard from "../../components/SkillCard/SkillCard";
import SkillPill from "../../components/SkillPill/SkillPill";

import { IoFishSharp } from "react-icons/io5";

console.log(skills);

const Skills = () => {
  return (
    <div id="skills" className="section skills-section">
      <h2 className="section-header">Skills</h2>
      <div className="skills-container">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <IoFishSharp className="fish" />
      </div>
    </div>
  );
};

export default Skills;
