import useAos from "../hooks/useAos";
import "../assets/scss/Navbar.scss"
import { Link } from "react-scroll";

const Navbar = () => {

    useAos();

    return(
        <nav className="nav" data-aos="fade-down">  
            <input type="checkbox" id="toggler" />
            <label for="toggler"><i className="fa-solid fa-bars"></i></label>
            <div className="nav-content">
                <ul className="nav-links">
                    <li className="nav-li"><Link className="link" to="home" spy={true} smooth={true} offset={-50} duration={500}>Inicio</Link></li>
                    <li className="nav-li"><Link to="works" spy={true} smooth={true} offset={50} duration={500} className="link">Proyectos </Link></li>
                    <li className="nav-li"><Link className="link" to="about" spy={true} smooth={true} offset={-100} duration={500}>Sobre mi </Link></li>
                    <li className="nav-li"><Link className="link" to="about" spy={true} smooth={true} offset={50} duration={500}>Contacto </Link></li>
                    <li className="nav-li"><Link className="link" to="technologies" spy={true} smooth={true} offset={50} duration={500}>Tecnologias</Link></li>
                </ul>
            </div>
        </nav>
        )
}

export default Navbar;
