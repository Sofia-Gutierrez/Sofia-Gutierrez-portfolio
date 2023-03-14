import React from "react";
import useAos from "../hooks/useAos";

function ProyectVideo( { title, video, link } ) {

    useAos();

    return (
        <div className="container-proyect-video" data-aos="zoom-in">
            <h4 className="proyect-title">{title}</h4>
            <video className="proyect-video" src={video} controls muted />
            <a className="proyect-video-link">Codigo: {link}</a>
        </div>
    )
}

export default ProyectVideo;