import React from "react";
import "../assets/scss/Proyects.scss";
import ProyectVideo from "./ProjectVideo";
import clickCounter from "../assets/video/click-counter2.mp4";
import taskList from "../assets/video/task-list2.mp4";
import calculator from "../assets/video/calculator2.mp4";

function Proyects() {

    return (
        <div className="container-proyects" >
          <ProyectVideo title="Calculadora:" video={calculator} link="https://github.com/Sofia-Gutierrez/calculator-freeCodeCamp" />
          <ProyectVideo title="Lista de Tareas:" video={taskList} link="https://github.com/Sofia-Gutierrez/task-list-freeCodeCamp" />
          <ProyectVideo title="Contador De Clicks:" video={clickCounter} link="https://github.com/Sofia-Gutierrez/counter-click-freeCodeCamp" />
        </div>
    )
}

export default Proyects;