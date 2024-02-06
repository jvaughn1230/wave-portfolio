import "./App.css";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Footer from "./components/Footer/Footer";

// Temp
import CurvedContainer from "./components/CurvedContainer/CurvedContainer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <CurvedContainer />

      <Footer />
    </div>
  );
}

export default App;
