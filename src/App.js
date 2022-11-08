import "./assets/scss/App.scss"
import Navbar from "./components/Navbar"
import Cover from "./components/Cover"
import Content from "./components/Content";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Cover />
        <Content />
        <div className="about">
          <AboutMe />
          <Contact />
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
