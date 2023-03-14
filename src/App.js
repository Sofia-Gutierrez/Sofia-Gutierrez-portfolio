import "./assets/scss/App.scss";
import { useEffect } from "react";
import Particles from "particlesjs";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Content from "./components/Content";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import { BrowserRouter } from "react-router-dom";
import Proyects from "./components/Projects";

function App() {

  useEffect(() => {
    Particles.init({
      selector: '.background',
      speed: 0.1,
      responsive: [
        {
          breakpoint: 2560, 
            options: {
              maxParticles: 100,
              connectParticles: true
            }
        },
        {
          breakpoint: 1000,
          options: {
            maxParticles: 10,
            connectParticles: false
          }
        }, 
        {
          breakpoint: 700,
          options: {
            maxParticles: 0
          }
        }
      ]
    });
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Cover />
      <Content />
      <Proyects />
      <AboutMe />
      <Technologies />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
