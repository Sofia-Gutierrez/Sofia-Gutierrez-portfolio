import React, { useEffect } from "react";
import AOS from 'aos';
import travel from "../assets/img/medellinTravel.jpg"
import museum from "../assets/img/museum.jpg"
import mercadoLiebre from "../assets/img/mercadoLiebre.jpg"
import "../assets/scss/Content.scss"

const Content = () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    })
        return(
            <div className="works-container" id="works"> 
                <div className="work-container img-r" data-aos="fade-right"> 
                    <a className="work-link" href="/#home" basename={process.env.PUBLIC_URL}>
                        <img className="work-img" src={travel} alt="travel work"/>
                        <div className="work-detail">
                            <h4 className="work-title">Medellin Travel</h4>
                            <p className="work-description">Desde nuestro sitio web ofrecemos servicios de transporte para personas recién llegados a Medellín, Colombia.
                            Nuestro principal objetivo es que las personas que nos elijan se sientan cómodas desde que bajan del avión hasta que vuelven a su destino.</p>
                        </div>
                    </a>
                </div>
                <div className="work-container img-l" data-aos="fade-right">
                    <a className="work-link" href="/#home" basename={process.env.PUBLIC_URL}>
                        <img className="work-img" src={museum} alt="museum work"/>
                        <div className="work-detail">
                            <h4 className="work-title">Museo Paleontologico</h4>
                            <p className="work-description">
                                    Texto de ejemplo
                            </p>
                        </div>
                    </a>
                </div>
                <div className="work-container img-r" data-aos="fade-right"> 
                    <a className="work-link" target="_blank" rel="noreferrer" href="https://sofiag-mercadoliebre.herokuapp.com/">
                        <img className="work-img" src={mercadoLiebre} alt="mercadoLiebre work"/>
                        <div className="work-detail">
                            <h4 className="work-title">Mercado Liebre</h4>
                            <p className="work-description">
                                    Proyecto realizado en Digital House con HTML y CSS.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        )
}

export default Content;
