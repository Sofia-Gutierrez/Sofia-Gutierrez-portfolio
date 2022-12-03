import useAos from "../hooks/useAos";
import video from "../assets/video/tree.mp4"
import "../assets/scss/Cover.scss";

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
            </div>
        )
}

export default Cover;
