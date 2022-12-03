import "../assets/scss/AboutMe.scss"
import useAos from "../hooks/useAos";

const AboutMe = () => {

    useAos();

        return(
                <div id="about" data-aos="zoom-in" className="about">
                    <p className="about-p">
                        Soy Sofia Gutierrez, tengo 18 años y me apasiona el mundo de la tecnologia.
                        <br/>
                        Programadora web orientada al Front-end, dedicada, ordenada y práctica.
                        <br />
                        Me gusta trabajar en equipo, crear nuevos proyectos, 
                        poner en práctica mis conocimientos y seguir aprendiendo constantemente.
                        <br />
                        Siempre me gusta resolver problemas y buscar soluciones.
                    </p>
                    <div className="tools-container">
                    <div className="tools-div">
                    <h2>Lenguajes:</h2>
                    <ul className="icons-container">
                        <li>HTML5  <i className="fa-brands fa-html5"></i></li>
                        <li>CSS3  <i className="fa-brands fa-css3-alt"></i></li>
                        <li>JavaScript  <i className="fa-brands fa-js"></i></li>
                        <li>React  <i className="fa-brands fa-react"></i></li>
                    </ul> 
                    </div>
                    <div className="tools-div">
                    <h2>Herramientas:</h2>
                    <ul className="icons-container">
                        <li>Git <i className="fa-brands fa-html5"></i></li>
                        <li>MySQL  <i className="fa-brands fa-css3-alt"></i></li>
                        <li>PostMan  <i className="fa-brands fa-js"></i></li>
                        <li>React  <i className="fa-brands fa-react"></i></li>
                    </ul> 
                    </div>
                    </div>
                </div>
        )
}

export default AboutMe;
