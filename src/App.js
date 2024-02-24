import React, { useState, useEffect } from "react";
import "./App.css";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Cover from "./components/Cover/Cover";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import {useProject} from "./context/ProjectContext"

function App() {
  // const [openModal, setOpenModal] = useState(false);
  const {selectedProject, setSelectedProject }= useProject();

  // console.log(selectedProject)

  // const closeModal = useEffect(setSelectedProject(null))


  return (
    <div className="App">
      {selectedProject && <Modal project={selectedProject}/>}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <div className="cover-wrapper">
        <Projects setSelectedProject={setSelectedProject} />
        <Cover />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
