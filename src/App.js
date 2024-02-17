import "./App.css";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Layout from "./components/Layout";
import Cover from "./components/Cover/Cover";

// Fish For Reference
import { GiTropicalFish } from "react-icons/gi";
import { IoFish } from "react-icons/io5";
import { GiFlatfish } from "react-icons/gi";
import { GiClownfish } from "react-icons/gi";
import { GiJellyfish } from "react-icons/gi";
import { GiPorcupinefish } from "react-icons/gi";
import { GiDolphin } from "react-icons/gi";

// Other Icon Options
import { GiSubmarine } from "react-icons/gi";
import { GiSharkJaws } from "react-icons/gi";
import { GiSeagull } from "react-icons/gi";
import { GiSeaTurtle } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <div className="cover-wrapper">
          <Projects />
          <Cover />
          <Contact />
        </div>
      </Layout>
    </div>
  );
}

export default App;
