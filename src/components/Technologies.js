import React from "react";
import "../assets/scss/AboutMe.scss";


const Technologies = ({title, img}) => {
    return (
       <li className="tool-li">{title}  <img src={img} className="language-img" alt="..."/></li>
    ) 
}

export default Technologies;