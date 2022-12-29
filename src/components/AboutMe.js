import React from "react";
import "../assets/scss/AboutMe.scss";
import useAos from "../hooks/useAos";
import Contact from "./Contact";

const AboutMe = () => {
    
    useAos();

        return(
            
            <div id="about" data-aos="zoom-in" className="about">
                <p className="about-p">
                    Soy Sofia Gutierrez, tengo 18 años, programadora web orientada al Front-end, dedicada, ordenada y práctica. Me apasiona el mundo de la tecnologia y me interesa aprender nuevas herramientas y lenguajes.
                    <br/>
                    Quiero superarme cada dia y dar lo mejor de mi para obtener los mejores resultados.
                    Me gusta el diseño minimalista, crear paginas limpias y con buen funcionamiento.
                    Como también me gusta trabajar en equipo, crear nuevos proyectos para poner en práctica mis conocimientos y seguir aprendiendo constantemente.
                    <br />
                    Siempre me gusta resolver problemas y buscar soluciones.
                    <br />
                    <span className="about-phrase">“If opportunity doesn’t knock, build a door.” – Milton Berle </span>
                </p>
                <Contact />
            </div>
        )
}

export default AboutMe;
