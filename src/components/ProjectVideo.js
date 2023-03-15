import React from "react";
import useAos from "../hooks/useAos";

function ProyectVideo( { title, video, linkGit, linkWeb } ) {

    useAos();

    return (
        <div className="container-proyect-video" data-aos="zoom-in">
            <h4 className="proyect-title">{title}</h4>
            <video className="proyect-video" src={video} controls muted />
            <div className="container-proyect-video-links">
                <a className="proyect-video-link link-git" href={linkGit} target="_blank" rel="noopener noreferrer">Codigo en GitHub </a>
                <a className="proyect-video-link link-web" href={linkWeb} target="_blank" rel="noopener noreferrer">Ir a la Web</a>
            </div>
        </div>
    )
}

export default ProyectVideo;