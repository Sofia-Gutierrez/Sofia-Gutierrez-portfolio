import useAos from "../hooks/useAos";
import travel from "../assets/img/medellinTravel.jpg"
import museum from "../assets/img/museum.jpg"
import mercadoLiebre from "../assets/img/mercadoLiebre.jpg"
import "../assets/scss/Content.scss"

const Content = () => {

    useAos();

        return(
            <div>
                <div className="works-container works-300" id="works"> 
                    <div className="work-container img-r" data-aos="fade-right"> 
                        <a className="work-link" href="./#home">
                            <img className="work-img" src={travel} alt="travel work"/>
                            <div className="work-detail">
                                <h4 className="work-title">Medellín Travel:</h4>
                                <p className="work-description">Desde nuestro sitio web ofrecemos servicios de transporte para personas recién llegados a Medellín, Colombia.
                                Nuestro principal objetivo es que las personas que nos elijan se sientan cómodas desde que bajan del avión hasta que vuelven a su destino.</p>
                            </div>
                        </a>
                    </div>
                    <div className="work-container img-l" data-aos="fade-right">
                        <a className="work-link" href="./#home">
                            <img className="work-img" src={museum} alt="museum work"/>
                            <div className="work-detail">
                                <h4 className="work-title">Museo Paleontológico:</h4>
                                <p className="work-description">
                                        Trabajo realizado con HTML <i className="fa-brands fa-html5"></i>, SASS y JS <i className="fa-brands fa-js"></i>.. Realice el frontend para el footer, las paginas de "Visita al campo" y "Recorrida del Museo"
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="work-container img-r" data-aos="fade-right"> 
                        <a className="work-link" target="_blank" rel="noreferrer" href="https://sofiag-mercadoliebre.herokuapp.com/">
                            <img className="work-img" src={mercadoLiebre} alt="mercadoLiebre work"/>
                            <div className="work-detail">
                                <h4 className="work-title">Mercado Liebre:</h4>
                                <p className="work-description">
                                        Proyecto realizado en Digital House con HTML <i className="fa-brands fa-html5"></i> y CSS <i className="fa-brands fa-css3-alt"></i> para trabajar el frontend, aplicando buenas practicas para hacer un sitio responsive, con Mobile First. Es un e-commerce partiendo de Mercado Libre como ejemplo.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide works-1000" data-bs-ride="false">
                    <h2 className="works-title">Proyectos</h2>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={travel} className="d-block w-100 carousel-img" alt="Medellín Travel"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="proyect-title">Medellín Travel</h5>
                            <p className="proyect-detail">Desde nuestro sitio web ofrecemos servicios de transporte para personas recién llegados a Medellín, Colombia.
                             Nuestro principal objetivo es que las personas que nos elijan se sientan cómodas desde que bajan del avión hasta que vuelven a su destino.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={museum} className="d-block w-100 carousel-img" alt="Museo Paleontológico" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Museo Paleontológico</h5>
                            <p> Trabajo realizado con HTML <i className="fa-brands fa-html5"></i>, SASS y JS <i className="fa-brands fa-js"></i>.. Realice el frontend para el footer, las paginas de "Visita al campo" y "Recorrida del Museo"</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={mercadoLiebre} className="d-block w-100 carousel-img" alt="Mercado Liebre" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="proyect-title">Mercado Liebre</h5>
                            <p className="proyect-detail">Proyecto realizado en Digital House con HTML <i className="fa-brands fa-html5"></i> y CSS <i className="fa-brands fa-css3-alt"></i> para trabajar el frontend, aplicando buenas practicas para hacer un sitio responsive, con Mobile First. Es un e-commerce partiendo de Mercado Libre como ejemplo.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
           
        )
}

export default Content;
