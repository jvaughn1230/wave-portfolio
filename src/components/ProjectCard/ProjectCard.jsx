import React, { useState } from "react";
import "./ProjectCard.css";
import dinobeach from "../../assets/dinobeach.png";
import Modal from "../Modal/Modal";

const ProjectCard = (project) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={dinobeach} alt="dinobeach" />
      <div className={`${hovered ? "portfolio-box" : "hide"}`}>
        Project Name
      </div>
    </div>
  );
};

export default ProjectCard;
