import React from "react";
import "./Modal.css";
import Slider from "../Slider/Slider";
import Pill from "../Pill/Pill";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Modal = ({ project, closeModal }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const stack = project.stack;

  const pillStack = stack.map((tech, index) => (
    <Pill tech={tech} key={index} />
  ));

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <h2>{project.name}</h2>
        <div className="slider-container">
          <Slider />
        </div>
        <div className="modal-content">
          <h3>Stack: </h3>
          <div>{pillStack}</div>
          <h3>Description: </h3> <p>{project.description}</p>
          <h3>Links: </h3>
          <div>
            <a className="image-link" href="github.com">
              <FaGithub size={30} />
            </a>
            <FiExternalLink size={30} />
          </div>
        </div>

        <IoMdClose onClick={closeModal} size={50} className="modal-exit" />
      </div>
    </div>
  );
};

export default Modal;
