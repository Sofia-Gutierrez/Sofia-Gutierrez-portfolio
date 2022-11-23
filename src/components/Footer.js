import React from "react";
import "../assets/scss/Footer.scss";

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer-links"> 
                <a target="_blank" rel="noreferrer" href="https://github.com/Sofia-Gutierrez" className="footer-a"> GitHub <i className="fa-brands fa-github"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sofia-g-gutierrez/" className="footer-a"> LinkedIn <i className="fa-brands fa-linkedin"></i></a>
                <p className="footer-gm">  gs.gutierrez.sofia@gmail.com  <i class="fa-solid fa-envelope"></i></p> 
            </div>
                <h6>Hecho con <i className="fa-solid fa-heart"></i> por Sofia Gutierrez.</h6>
        </footer>
    )
}

export default Footer;




