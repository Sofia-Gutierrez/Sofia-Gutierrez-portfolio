import React from "react";
import "../assets/scss/Proyects.scss";
import ProyectVideo from "./ProjectVideo";
import clickCounter from "../assets/video/click-counter2.mp4";
import taskList from "../assets/video/task-list2.mp4";
import calculator from "../assets/video/calculator2.mp4";

function Proyects() {

    return (
        <div className="container-proyects" >
          <ProyectVideo title="Calculadora:" video={calculator} linkGit="https://github.com/Sofia-Gutierrez/calculator-freeCodeCamp"  linkWeb="https://sofia-gutierrez-calculator.vercel.app/" />
          <ProyectVideo title="Lista de Tareas:" video={taskList} linkGit="https://github.com/Sofia-Gutierrez/task-list-freeCodeCamp" linkWeb="https://sofia-gutierrez-task-list.vercel.app/" />
          <ProyectVideo title="Contador De Clicks:" video={clickCounter} linkGit="https://github.com/Sofia-Gutierrez/counter-click-freeCodeCamp" linkWeb="https://counter-click-freecodecamp.vercel.app/" />
        </div>
    )
}

export default Proyects;