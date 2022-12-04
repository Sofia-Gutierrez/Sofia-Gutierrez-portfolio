import useAos from "../hooks/useAos";
import "../assets/scss/Navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {

    useAos();

        return(
            <nav className="nav" data-aos="fade-down">  
                <input type="checkbox" id="toggler" />
                <label for="toggler"><i className="fa-solid fa-bars"></i></label>
                <div className="nav-content">
                    <ul className="nav-links">
                        <li className="nav-li"><a className="link-i" href="./#home"><i className="fa-solid fa-house"></i></a></li>
                        <li className="nav-li"><a className="link" href="./#works">Proyectos</a></li>
                        <li className="nav-li"><a className="link" href="#about">Sobre mi</a></li>
                        <li className="nav-li"><a className="link" href="./#contact">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;
