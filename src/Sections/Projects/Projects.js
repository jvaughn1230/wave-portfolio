import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import { projects } from "../../data/projects";
import CurvedContainer from "../../components/CurvedContainer/CurvedContainer";

const Projects = () => {
  const projectCards = projects.map((project) => (
    <ProjectCard project={project} key={project.id} />
  ));
  return (
    <CurvedContainer>
      <div className="section projects" id="projects">
        <h2 className="section-header">Projects</h2>
        <div className="projects-container">{projectCards}</div>
      </div>
    </CurvedContainer>
  );
};

export default Projects;
