import React from "react";
import "../assets/scss/AboutMe.scss";
import useAos from "../hooks/useAos";
import Contact from "./Contact";

const AboutMe = () => {
    
    useAos();

        return(
            
            <div id="about" className="about-contact-container">
                 <div className="about-contact" data-aos="zoom-in">
                    <p className="about-p">
                        Soy Sofia Gutierrez, tengo 18 años, programadora web orientada al Front-end.
                        <br/>
                        Me gusta aprender nuevas tecnologias y herramientas y sacar el máximo potencial a las tecnologias con las que trabajo,
                        Como también me gusta trabajar en equipo, crear nuevos proyectos para poner en práctica mis conocimientos y superarme dia a dia.
                        <br />
                        <span className="about-phrase">“If opportunity doesn’t knock, build a door.” – Milton Berle </span>
                    </p>
                    <Contact />
                 </div>
            </div>
        )
}

export default AboutMe;
