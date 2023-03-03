import React from "react";
import useAos from "../hooks/useAos";
import "../assets/scss/Navbar.scss"
import { Link } from "react-scroll";

const Navbar = () => {

    const handleClickBtn = () => {
        const btn = document.getElementById("nav-btn");
        const navContent = document.getElementById("nav-content");

        btn.classList.toggle("open");
        navContent.classList.toggle("open");
    }

    useAos();

    return(
        <nav className="nav" data-aos="fade-down">  
            <div id="nav-btn" onClick={handleClickBtn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav-content" id="nav-content">
                <ul className="nav-links">
                    <li className="nav-li"><Link className="link" to="home" spy={true} smooth={true} offset={-50} duration={500}>Inicio</Link></li>
                    <li className="nav-li"><Link to="works" spy={true} smooth={true} offset={50} duration={500} className="link">Proyectos</Link></li>
                    <li className="nav-li"><Link className="link" to="about" spy={true} smooth={true} offset={-10} duration={500}>Contacto</Link></li>
                    <li className="nav-li"><Link className="link" to="technologies" spy={true} smooth={true} offset={50} duration={500}>Tecnologias</Link></li>
                </ul>
            </div>
        </nav>
        )
}

export default Navbar;
