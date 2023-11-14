import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section">
      <h2 className="section-header">Projects</h2>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
