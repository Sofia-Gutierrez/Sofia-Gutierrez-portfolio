import useAos from "../hooks/useAos";
import "../assets/scss/Cover.scss";
import {Link} from "react-scroll";

const Cover = () => {

    useAos();

        return(
            <div className="cover-container" id="home">
                <div className="content" data-aos="fade-down">
                    <h1 className="name">Sofia Gutierrez</h1>
                    <p className="title">Desarrolladora Web Full Stack</p>
                </div>
                <ul className="links-container" data-aos="fade-down">
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/Sofia-Gutierrez"><i className="fa-brands fa-github"></i></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sofia-g-gutierrez/"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
                <div className="container">
                    <div className="content-arrow">
                        <p className="arrow-text">Proyectos</p>
                        <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
                        <svg id="more-arrows">
                        <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                        <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                        <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                        </svg>
                        </Link>    
                    </div>
                </div>
                
            </div>
        )
}

export default Cover;
