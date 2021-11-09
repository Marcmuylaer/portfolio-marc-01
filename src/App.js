import                    "bootstrap/dist/css/bootstrap.min.css";
import                    "./App.css";
import React         from 'react';
import Particles     from "react-particles-js";
import Navbar        from "./Components/Navbar";
import Header        from "./Components/Header";
import AboutMe       from "./Components/AboutMe";
import Portfolio     from './Components/Portfolio';
import Contact       from './Components/Contact';
import Footer        from './Components/Footer';
//import FakeNav     from "./Components/FakeNav";
//import Skills      from "./Components/Skills";
import Timeline      from './Components/Experiences';

function App() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "spiral",
              stroke: {
                with: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;