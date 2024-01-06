import React from "react";
import "./Modal.css";
import Slider from "../Slider/Slider";

const Modal = ({ project, closeModal }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // TODO: Pill containers for stack, buttons for links, image carousel
  // TODO: Fix Exit Modal Issue

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="slider-container">
          <Slider />
        </div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>{project.stack}</p>
        <p onClick={() => openInNewTab(project.frontEnd)}>Github</p>
        <br />
        <button onClick={closeModal}>Exit</button>
      </div>
    </div>
  );
};

export default Modal;
