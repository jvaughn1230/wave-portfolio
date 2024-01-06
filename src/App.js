import "./App.css";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="448"
        height="127.485"
        viewBox="0 0 448 127.485"
      >
        <path
          d="M449.866,65.608c0,34.928-29.931,63.29-67.024,63.732h-.358c-.175,0-.343,0-.519,0q-2.775-.046-5.542-.2a.854.854,0,0,1-.118-.011,129.942,129.942,0,0,1-31.852-5.872,130.876,130.876,0,0,0-78.943,0,130.494,130.494,0,0,1-39.465,6.1,130.5,130.5,0,0,1-39.471-6.1,130.851,130.851,0,0,0-78.935,0,130.236,130.236,0,0,1-33.44,5.96c-.027,0-.051,0-.078,0-1.455.068-2.9.107-4.36.125-.061,0-.128,0-.195.005h-.149C32.08,129.172,1.866,100.7,1.866,65.608S32.08,2.045,69.418,1.871h.092c.082.005.17.005.252.005,1.455.018,2.9.057,4.36.125.027,0,.051,0,.078,0a130.237,130.237,0,0,1,33.44,5.96A130.675,130.675,0,0,0,147.1,14.06a130.666,130.666,0,0,0,39.471-6.094,130.741,130.741,0,0,1,78.935,0,130.694,130.694,0,0,0,39.471,6.094,130.7,130.7,0,0,0,39.472-6.094A129.943,129.943,0,0,1,376.3,2.093a.852.852,0,0,1,.118-.011q2.766-.158,5.542-.2c.175,0,.343,0,.519,0h.358C419.935,2.319,449.866,30.68,449.866,65.608Z"
          transform="translate(-1.866 -1.866)"
          fill="#d0614d"
        ></path>
      </svg> */}

      <Slider />
    </div>
  );
}

export default App;
