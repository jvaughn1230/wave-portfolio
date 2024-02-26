import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./ProjectCard.css";
import { useProject } from "../../context/ProjectContext";

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const { setSelectedProject } = useProject();

  const { ref: projectViewRef, inView: projectVisible } = useInView({
    triggerOnce: true,
  });

  // const closeModal = () => setOpenModal(false);
  const handleClick = () => {
    setSelectedProject(project);
    setHovered(false);
  };

  return (
    <div
      className={`project-card ${projectVisible ? "show-project-card" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={projectViewRef}
    >
      <img src={project.cover} alt="dinobeach" className="project-card-img" />
      <div className={`${hovered ? "portfolio-box" : "hide"}`}>
        <h3>{project.name}</h3>
        <h3>{project.type}</h3>
        <button onClick={handleClick} className="btn project-btn">
          Read More
        </button>
        {/* <button onClick={handleClick}>Read More</button> */}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ProjectCard;
