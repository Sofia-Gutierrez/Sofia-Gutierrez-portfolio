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
                <div className="img-container img-r" data-aos="fade-right"> 
                    <img src={travel} alt="travel work"/>
                    <a href="/#">
                        <div className="work-detail">
                            <h4 className="work-title">Medellin Travel</h4>
                        </div>
                    </a>
                </div>
                <div className="img-container img-l" data-aos="fade-left">
                    <img src={museum} alt="museum work"/>
                    <a href="/#">
                        <div className="work-detail">
                            <h4 className="work-title">Museo Paleontologico</h4>
                        </div>
                    </a>
                </div>
                <div className="img-container img-r" data-aos="fade-right"> 
                    <img src={mercadoLiebre} alt="mercadoLiebre work"/>
                    <a target="_blank" rel="noreferrer" href="https://sofiag-mercadoliebre.herokuapp.com/">
                        <div className="work-detail">
                            <h4 className="work-title">Mercado Liebre</h4>
                        </div>
                    </a>
                </div>
            </div>
        )
}

export default Content;
