import React, { useEffect } from "react"
import AOS from 'aos';
import "../assets/scss/AboutMe.scss"

const AboutMe = () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    })

        return(
                <div id="about" data-aos="zoom-in">
                    <p className="about-p">
                        Programadora web orientada al Front-end.
                        <br />
                        Soy dedicada, ordenada y organizada. Me gusta trabajar en equipo, crear nuevos proyectos, 
                        poner en práctica mis conocimientos y seguir aprendiendo constantemente.
                        <br />
                        Siempre me gusta resolver problemas y buscar soluciones.
                    </p>
                    <ul className="icons-container">
                        <li><i className="fa-brands fa-html5"></i></li>
                        <li><i className="fa-brands fa-css3-alt"></i></li>
                        <li><i className="fa-brands fa-js"></i></li>
                        <li><i className="fa-brands fa-react"></i></li>
                    </ul>
                </div>
        )
}

export default AboutMe;
