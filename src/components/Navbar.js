import React, { useEffect } from "react"
import AOS from 'aos';
import "../assets/scss/Navbar.scss"

const Navbar = () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    })

        return(
            <nav className="nav" data-aos="fade-down">  
                <input type="checkbox" id="toggler" />
                <label for="toggler"><i className="fa-solid fa-bars"></i></label>
                <div className="nav-content">
                    <ul className="nav-links">
                        <li className="nav-li"><a className="link-i" href="/#home" basename={process.env.PUBLIC_URL}><i className="fa-solid fa-house"></i></a></li>
                        <li className="nav-li"><a className="link" href="/#works" basename={process.env.PUBLIC_URL}>Proyectos</a></li>
                        <li className="nav-li"><a className="link" href="/#about" basename={process.env.PUBLIC_URL}>Sobre mi</a></li>
                        <li className="nav-li"><a className="link" href="/#contact" basename={process.env.PUBLIC_URL}>Contacto</a></li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;
