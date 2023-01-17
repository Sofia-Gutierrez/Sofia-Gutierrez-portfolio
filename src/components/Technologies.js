import React from "react";
import "../assets/scss/AboutMe.scss";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/Javascript.png";
import react from "../assets/img/react.png";
import node from "../assets/img/Node.png";
import git from "../assets/img/git.png";
import express from "../assets/img/express.jpg";
import MySQL from "../assets/img/MySQL.png";
import Sass from "../assets/img/sass.png";
import jQuery from "../assets/img/jQuery.png"


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
            title: "Sass",
            img: Sass
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
        {
            title: "jQuery",
            img: jQuery
        },
    ]

    return (
        <div className="tools-container" id="technologies">
            <div className="tools-div">
                <h2>Tecnologias: </h2>
                <ul className="icons-container">   
                    {ContentTechnologies.map((element, index) => {
                        return (
                            <li className="tool-li" key={index + element.title}>{element.title}<img src={element.img} className="language-img" alt="..."/></li>)
                        })
                    }
                </ul> 
            </div>
        </div>
      
    ) 
}

export default Technologies;