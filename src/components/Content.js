import React from "react";
import useAos from "../hooks/useAos";
import podasGutierrez from "../assets/img/podasGutierrez.jpg"
import travel from "../assets/img/medellinTravel.jpg"
import museum from "../assets/img/museum.jpg"
import mercadoLiebre from "../assets/img/mercadoLiebre.jpg"
import "../assets/scss/Content.scss"

const Content = () => {

    useAos();

        return(
            <div className="works-container" id="works"> 
             <div className="work-container" data-aos="fade-right"> 
                        <img className="work-img" src={podasGutierrez} alt="travel work"/>
                        <div className="work-background"></div>
                        <div className="work-detail">
                            <a href="https://podas-gutierrez.vercel.app/">
                                <h4 className="work-title">Podas Gutierrez:</h4>
                                <p className="work-description">
                                    Esta pagína fue realizada en React con HTML, SCSS y Boostrap.
                                    <br/>
                                    El responsive realizado con la metodología de trabajo Mobile First haciendola 100% resposive. 
                                </p>
                            </a>
                        </div>
                </div>
                <div className="work-container" data-aos="fade-right"> 
                        <img className="work-img" src={travel} alt="travel work"/>
                        <div className="work-background"></div>
                        <div className="work-detail">
                            <h4 className="work-title">Medellín Travel:</h4>
                            <p className="work-description">
                                Esta pagina fue un proyecto realizado en Digital House es un E-Commerce.
                                <br/>
                                Es 100% responsive utilizando la metodología de trabajo Mobile First. 
                                <br/>
                                Se trabajo con HTML, CSS y Js Front para el Frontend, MySQLy y Js para el Backend. Cuenta con middlewares y controladores para sus distintas funcionalidades y tiene validaciones con js para el front y el backend.
                            </p>
                        </div>
                </div>
                <div className="work-container" data-aos="fade-right">
                        <img className="work-img" src={museum} alt="museum work"/>
                        <div className="work-background"></div>
                        <div className="work-detail">
                            <h4 className="work-title">Museo Paleontológico:</h4>
                            <p className="work-description">
                                    Trabajo realizado con HTML <i className="fa-brands fa-html5"></i>, SASS y JS <i className="fa-brands fa-js"></i> 
                                    <br/>
                                    Realice el frontend para el footer, las paginas de "Recorrida del Museo" y "Visita al yacimiento"
                            </p>
                        </div>
                </div>
                <div className="work-container" data-aos="fade-right"> 
                        <img className="work-img" src={mercadoLiebre} alt="mercadoLiebre work"/>
                        <div className="work-background"></div>
                        <div className="work-detail">
                            <h4 className="work-title">Mercado Liebre:</h4>
                            <p className="work-description">
                                    Proyecto realizado en Digital House con HTML <i className="fa-brands fa-html5"></i> y CSS <i className="fa-brands fa-css3-alt"></i> para trabajar el frontend, aplicando buenas practicas para hacer un sitio responsive, con Mobile First. Es un e-commerce partiendo de Mercado Libre como ejemplo.
                            </p>
                        </div>
                </div>
            </div>
        )
}

export default Content;
