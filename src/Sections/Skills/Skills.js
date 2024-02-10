import React from "react";
import "./Skills.css";
import WaveContainer from "../../components/WaveContainer/WaveContainer";

import { skills } from "../../data/skills";

import SkillCard from "../../components/SkillCard/SkillCard";

console.log("Skills, " + skills);

const Skills = () => {
  const skillsList = skills.map((skill) => (
    <SkillCard skill={skill} key={skill.id} />
  ));

  return (
    <WaveContainer>
      <div id="skills" className="section skills-section">
        <h2 className="section-header">Skills</h2>
        <div className="skills-container">{skillsList}</div>
      </div>
    </WaveContainer>
  );
};

export default Skills;
