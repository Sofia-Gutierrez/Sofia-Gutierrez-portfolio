import React from "react";
import "../assets/scss/AboutMe.scss";
import useAos from "../hooks/useAos";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import node from "../assets/img/Node.png";
import git from "../assets/img/git.png";
import express from "../assets/img/express.jpg";
import MySQL from "../assets/img/MySQL.png";
import Technologies from "./Technologies";


const AboutMe = () => {

    const ContentTechnologies = [
        {
            title: "HTML",
            img: html
        },
        {
            title: "Css",
            img: css
        },
        {
            title: "Javascript",
            img: js
        },
        {
            title: "React",
            img: react
        },
        {
            title: "NodeJs",
            img: node
        },
        {
            title: "GitHub",
            img: git
        },
        {
            title: "Express",
            img: express
        },
        {
            title: "MySQL",
            img: MySQL
        },
    ]
    
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
                <div className="tools-container">
                    <div className="tools-div">
                        <h2>Tecnologias: </h2>
                        <ul className="icons-container">
                            {ContentTechnologies.map((element, index) => {
                            return (
                                <Technologies
                                    title={element.title}
                                    img={element.img}
                                    key={index + element.title}
                                />)
                            })
                            }
                        </ul> 
                    </div>
                </div>
            </div>
        )
}

export default AboutMe;
