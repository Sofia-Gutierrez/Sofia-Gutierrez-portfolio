import React, { lazy, Suspense,useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "particlesjs";

import "./assets/scss/App.scss";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const Cover = lazy(() => import("./components/Cover"));
const Content = lazy(() => import("./components/Content"));
const Projects = lazy(() => import("./components/Projects"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Technologies = lazy(() => import("./components/Technologies"));
const Footer = lazy(() => import("./components/Footer"));



function App() {

  useEffect(() => {
    Particles.init({
      selector: '.background',
      speed: 0.1,
      responsive: [
        {
          breakpoint: 2560, 
            options: {
              maxParticles: 50,
              connectParticles: true
            }
        },
        {
          breakpoint: 1430,
          options: {
            maxParticles: 20,
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
      <Suspense fallback={<Loading />}> 
        <Cover />
        <Content />
        <Projects />
        <AboutMe />
        <Technologies />
        <Footer />
       </Suspense> 
       
    </BrowserRouter>
  );
}

export default App;
