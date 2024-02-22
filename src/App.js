import React, { useState } from "react";
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

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setOpenModal(false);

  return (
    <div className="App">
      {openModal && <Modal project={selectedProject} closeModal={closeModal} />}
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
