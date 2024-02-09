import "./App.css";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Footer from "./components/Footer/Footer";

// Temp
import CurvedContainer from "./components/CurvedContainer/CurvedContainer";

/* 
TODO:
  Curved Containers
TODO:  
  Waved Containers: 

*/

function App() {
  return (
    <div className="App">
      <Hero />
      {/* Top Wave, bottom Curve */}
      <About />
      <Skills />
      {/* Skills -> Curved */}

      <Projects />
      {/* Top Wave */}
      <Contact />

      <CurvedContainer type="curve">
        <Skills />
      </CurvedContainer>

      <Footer />
    </div>
  );
}

export default App;
