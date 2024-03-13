import React from "react";
import "./Modal.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import Pill from "../Pill/Pill";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import { useProject } from "../../context/ProjectContext";

const Modal = ({ project }) => {
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noreferrer");
  // };

  const { setSelectedProject } = useProject();

  const closeModal = () => setSelectedProject(null);

  // Tech Stack Mapping
  const stack = project.stack;

  const pillStack = stack.map((tech, index) => (
    <Pill tech={tech} key={index} />
  ));

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <h2>{project.name}</h2>
        <div className="modal-slider-container">
          <ImageSlider />
        </div>
        <div className="modal-content">
          <h3>Stack: </h3>
          <div>{pillStack}</div>
          <h3>Description: </h3> <p>{project.description}</p>
          <h3>Links: </h3>
          <div className="modal-links-container">
            {project.frontEnd && (
              <a
                className="icon"
                href={project.frontEnd}
                data-tooltip="Front End Code"
              >
                <FaGithub size={30} />
              </a>
            )}

            {project.backEnd && (
              <a
                href={project.backEnd}
                className="icon"
                data-tooltip="Back End Code"
              >
                <FaGithub size={30} />
              </a>
            )}

            <a
              href={project.website}
              className="icon"
              data-tooltip="Visit Site"
            >
              <FiExternalLink size={30} />
            </a>
          </div>
        </div>

        <IoMdClose onClick={closeModal} size={50} className="modal-exit" />
      </div>
    </div>
  );
};

export default Modal;
