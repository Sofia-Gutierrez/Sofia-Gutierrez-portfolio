import React from "react";
import "../assets/scss/AboutMe.scss";
import useAos from "../hooks/useAos";
import Contact from "./Contact";

const AboutMe = () => {
    
    useAos();

        return(
            
            <div id="about" data-aos="zoom-in" className="about">
                <p className="about-p">
                    Soy Sofia Gutierrez, tengo 18 años y me apasiona el mundo de la tecnologia.
                    <br/>
                    Programadora web orientada al Front-end, dedicada, ordenada y práctica.
                    <br />
                    Me gusta trabajar en equipo, crear nuevos proyectos, 
                    poner en práctica mis conocimientos y seguir aprendiendo constantemente.
                    <br />
                    Siempre me gusta resolver problemas y buscar soluciones.
                </p>
                <Contact />
            </div>
        )
}

export default AboutMe;
