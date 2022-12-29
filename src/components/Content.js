import useAos from "../hooks/useAos";
import travel from "../assets/img/medellinTravel.jpg"
import museum from "../assets/img/museum.jpg"
import mercadoLiebre from "../assets/img/mercadoLiebre.jpg"
import "../assets/scss/Content.scss"

const Content = () => {

    useAos();

        return(
            <div className="works-container" id="works"> 
                <div className="work-container img-r" data-aos="fade-right"> 
                        <img className="work-img" src={travel} alt="travel work"/>
                        <div className="work-background"></div>
                        <div className="work-detail">
                            <h4 className="work-title">Medellín Travel:</h4>
                            <p className="work-description">Desde nuestro sitio web ofrecemos servicios de transporte para personas recién llegados a Medellín, Colombia.
                            Nuestro principal objetivo es que las personas que nos elijan se sientan cómodas desde que bajan del avión hasta que vuelven a su destino.</p>
                        </div>
                </div>
                <div className="work-container img-l" data-aos="fade-right">
                        <img className="work-img" src={museum} alt="museum work"/>
                        <div className="work-background"></div>
                        <div className="work-detail">
                            <h4 className="work-title">Museo Paleontológico:</h4>
                            <p className="work-description">
                                    Trabajo realizado con HTML <i className="fa-brands fa-html5"></i>, SASS y JS <i className="fa-brands fa-js"></i>.. Realice el frontend para el footer, las paginas de "Visita al campo" y "Recorrida del Museo"
                            </p>
                        </div>
                </div>
                <div className="work-container img-r" data-aos="fade-right"> 
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
