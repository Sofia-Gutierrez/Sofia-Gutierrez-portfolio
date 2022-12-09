import React from "react";
import "../assets/scss/AboutMe.scss";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/Javascript.png";
import react from "../assets/img/react.png";
import node from "../assets/img/Node.png";
import git from "../assets/img/git.png";
import express from "../assets/img/express.png";
import MySQL from "../assets/img/MySQL.png";


const Technologies = () => {

    const ContentTechnologies = [
        {
            title: "HTML",
            img: html
        },
        {
            title: "CSS",
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

    return (
        <div className="tools-container" data-aos="zoom-in" >
                    <div className="tools-div">
                        <h2>Tecnologias: </h2>
                        <ul className="icons-container">
                            
                            {ContentTechnologies.map((element, index) => {
                            return (
                                <li className="tool-li">{element.title} <img src={element.img} className="language-img" alt="..."/></li>)
                            })
                            }
                        </ul> 
                    </div>
                </div>
      
    ) 
}

export default Technologies;