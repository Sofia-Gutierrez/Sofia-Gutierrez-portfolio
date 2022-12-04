import React from "react";
import Cover from "./Cover";
import Content from "./Content";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import node from "../assets/img/Node.png";
import git from "../assets/img/git.png";
import express from "../assets/img/express.jpg";
import MySQL from "../assets/img/MySQL.png";
import Technologies from "./Technologies";

const Home = () => {

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

    return (
        <main>        
            <Cover/>
            <Content/>
            <div className="tools-container" data-aos="zoom-in" >
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
        </main>

    )
}

export default Home;