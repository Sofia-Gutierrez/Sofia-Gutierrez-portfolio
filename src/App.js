import "./assets/scss/App.scss"
import Navbar from "./components/Navbar"
import Cover from "./components/Cover"
import Content from "./components/Content";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Content />
      <div className="about">
        <AboutMe />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
