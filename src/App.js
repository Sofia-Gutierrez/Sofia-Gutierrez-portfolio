import "./assets/scss/App.scss";
import video from "./assets/video/tree.mp4"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Content  from "./components/Content";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <video src={video} loop autoPlay muted className="video"></video>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Content/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="about" element={<AboutMe/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
