import React from "react";
import podasGutierrez from "../assets/img/podasGutierrez.jpg"
import travel from "../assets/img/medellinTravel.jpg"
import museum from "../assets/img/museum.jpg"
import mercadoLiebre from "../assets/img/mercadoLiebre.jpg"
import "../assets/scss/Content.scss"
import Work from "./Work";

const Content = () => {

    const ContentWorks = [
        {
            img: podasGutierrez,
            title: "Podas Gutierrez",
            description: "Esta pagína fue realizada en React con HTML, SCSS y Boostrap. El responsive realizado con la metodología de trabajo Mobile First haciendola 100% resposive.",
            link: "https://podas-gutierrez.vercel.app/",
            alt: "Trabajo de podas"
        },
        {
            img: travel,
            title: "Medellín Travel",
            description: "Esta pagina fue un proyecto realizado en Digital House es un E-Commerce. Se trabajo con HTML, CSS y Js Front para el Frontend, MySQL y Js para el Backend. Cuenta con middlewares y controladores para sus distintas funcionalidades y tiene validaciones con js para el front y el backend.",
            link: "",
            alt: "Medellín Travel"
        },
        {
            img: museum,
            title: "Museo Paleontológico",
            description:"Trabajo realizado con HTML y CSS. Realice el frontend para el footer, las paginas de 'Recorrida del Museo' y 'Visita al yacimiento'",
            link: "",
            alt: "Museo Paleontológico"
        },
        {
            img: mercadoLiebre,
            title: "Mercado Liebre",
            description: "Proyecto realizado en Digital House con HTML y CSS para trabajar el frontend, aplicando buenas practicas para hacer un sitio responsive, con Mobile First. Es un e-commerce partiendo de Mercado Libre como ejemplo.",
            link: "",
            alt: "Mercado Liebre"
        },
        
    ]

        return(
            <div className="works-container" id="works"> 
                 {ContentWorks.map((element, index) => {
                        return (
                            <Work key={index + element.title} title={element.title} description={element.description} img={element.img} link={element.link}  alt={element.alt} />
                            )
                        })
                    }
            </div>
        )
}

export default Content;
