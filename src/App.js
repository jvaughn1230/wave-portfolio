import "./App.css";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Wave3 from "./components/wave3/Wave3";
import Animations from "./components/Animations/Animations";

function App() {
  return (
    <div className="App">
      <Animations />
      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
