import React, { useContext, useState, createContext } from "react";
import { projectsData } from "../data/projects";

const ProjectContext = createContext();

function ProjectContextProvider(props) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = projectsData;

  return (
    <ProjectContext.Provider
      value={{ selectedProject, setSelectedProject, projects }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
}

const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};

export { useProject, ProjectContextProvider };
