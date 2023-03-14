import React from "react";
import useAos from "../hooks/useAos";


function Work({ title, description, img, alt, link }) {

    useAos();

    return(
        <div className="work-container" data-aos="fade-right"> 
            <a href={link} >
                <img className="work-img" src={img} alt={alt} />
                <div className="work-background"></div>
                <div className="work-detail">
                    <h4 className="work-title">{title}</h4>
                    <p className="work-description">{description}</p>
                </div>
            </a>
         </div>
    )
}

export default Work;