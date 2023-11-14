import "./App.css";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Mailer from "./components/Mailer/Mailer";
import SkillCard from "./components/SkillCard/SkillCard";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
