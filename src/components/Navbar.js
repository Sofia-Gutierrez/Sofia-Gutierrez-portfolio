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
                        <li className="nav-li"><Link className="link-i" to="/"><i className="fa-solid fa-house"></i></Link></li>
                        <li className="nav-li"><Link className="link" to="/about">Sobre mi</Link></li>
                        <li className="nav-li"><Link className="link" to="/contact">Contacto</Link></li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;
