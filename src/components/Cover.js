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
                <Link to="works" spy={true} smooth={true} offset={50} duration={500}><i className="fa-solid fa-arrow-down"></i></Link>    
            </div>
        )
}

export default Cover;
