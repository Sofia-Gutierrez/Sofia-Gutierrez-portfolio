import "./assets/scss/App.scss";
import { useEffect } from "react";
import Particles from "particlesjs";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Content from "./components/Content";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HashRouter , Route , Routes } from "react-router-dom";

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
          breakpoint: 768, 
            options: {
              maxParticles: 50,
            }
        }, 
        {
          breakpoint: 425,
          options: {
            maxParticles: 10,
            connectParticles: false
          }
        }, 
        {
          breakpoint: 320,
          options: {
            maxParticles: 0
          }
        }
      ]
    });
  });

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact={true} basename={process.env.PUBLIC_URL} element={<Home />} />
        <Route path="/works" basename={process.env.PUBLIC_URL} element={<Content/>} />
        <Route path="/contact" basename={process.env.PUBLIC_URL} element={<Contact/>} />
        <Route path="/about" basename={process.env.PUBLIC_URL} element={<AboutMe/>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
