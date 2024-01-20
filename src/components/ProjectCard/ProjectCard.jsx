import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./ProjectCard.css";
import Modal from "../Modal/Modal";

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { ref: cardViewRef, inView: cardVisible } = useInView({
    triggerOnce: true,
  });

  const closeModal = () => setOpenModal(false);
  console.log(project.name + " " + openModal);
  const handleClick = () => {
    setOpenModal(true);
    setHovered(false);
  };

  return (
    <div
      className={`project-card ${cardVisible ? "show-project-card" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={cardViewRef}
    >
      <img src={project.cover} alt="dinobeach" />
      <div className={`${hovered ? "portfolio-box" : "hide"}`}>
        <h3>{project.name}</h3>
        <h3>{project.type}</h3>
        <button onClick={handleClick}>Read More</button>
      </div>
      <div></div>
      <div>
        {openModal && <Modal project={project} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default ProjectCard;
