import React from "react";

const Modal = (project) => {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>{project.stack}</p>
        <a href={`${project.frontend}`}>Github</a>
        <a href={`${project.website}`}>View</a>
      </div>
    </div>
  );
};

export default Modal;
