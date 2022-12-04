import "./assets/scss/App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cover from "./components/Cover";
import Content from "./components/Content";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FullPageScroll from "./components/FullPageScroll";

function App() {
  return (
    <div>
      <Navbar />
      <FullPageScroll />
      <Footer />
    </div>
  );
}

export default App;
