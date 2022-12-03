import "./assets/scss/App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Content from "./components/Content";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HashRouter , Route , Routes } from "react-router-dom";

function App() {
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
