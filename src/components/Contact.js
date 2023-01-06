import React, { useEffect, useState } from "react"
import emailjs from "emailjs-com"
import "../assets/scss/Contact.scss"
import useAos from "../hooks/useAos";

const Contact = () => {

  useAos();

  const [name, setName] = useState({
    value: "",
    msgName: ""
  });
  const [email, setEmail] = useState({ 
    value: "",
    msgEmail: ""
  });
  const [message, setMessage] = useState({ 
    value: "",
    msgMessage: ""
  });

  useEffect (() => {
  
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let btn = document.getElementById("btn-contact");
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(name.value.length >= 4 && emailRegex.test(email.value) === true && message.value.length >= 10) {
      btn.classList.remove("btn-contact-err");
      btn.classList.add("btn-contact");
      btn.disabled = false
    }

  })

  const handleOnBlurName = (e) => {

    let name = e.target.value
    let msgName = "" 

    const btn = document.getElementById("btn-contact");

    if(name.length < 4) {
      msgName = "Ingrese su Nombre";
      btn.classList.add("btn-contact-err");
      btn.classList.remove("btn-contact");
      btn.disabled = true
    }

    setName(currentValue => ({
      ...currentValue,
      name: e.target.value,
      msgName: msgName
    }))
  }

  const handleOnBlurEmail = (e) => {

    let email = e.target.value;
    let msgEmail = "";

    const btn = document.getElementById("btn-contact");

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(email.length < 4) {
      msgEmail = "Ingrese un Correo";
      btn.classList.add("btn-contact-err");
      btn.classList.remove("btn-contact");
      btn.disabled = true
    } else if (!(emailRegex.test(email))) {
      msgEmail = "Ingrese un Correo Valido";
      btn.classList.add("btn-contact-err");
      btn.classList.remove("btn-contact");
      btn.disabled = true
    }

    setEmail(currentValue => ({
      ...currentValue,
      email: email,
      msgEmail: msgEmail
    }))
  }

  const handleOnBlurMessage = (e) => {
    let message = e.target.value;
    let msgMessage = "";

    const btn = document.getElementById("btn-contact");

    if(message.length <= 10 ) {
      msgMessage = "Deje su mensaje";
      btn.classList.add("btn-contact-err");
      btn.classList.remove("btn-contact");
      btn.disabled = true
    }

    setMessage(currentValue => ({
      ...currentValue,
      message: message,
      msgMessage: msgMessage
    }))
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('portfolio-gs', 'template_xx5pbps', e.target, 'JrCDstaDLUt_54uRl')
    .then((result) => {
      console.log(result.text);
      document.getElementById("okMsg").innerText = "El correo fue enviado!"
      }, (error) => {
          console.log(error.text);
          document.getElementById("okMsg").innerText = "Ocurrio un error al enviar el correo."
      });
      e.target.reset()
  };


        return(
          <div className="form-container">
            <form  onSubmit={sendEmail} className="contact-form" action="https://formsubmit.co/sofiagutierrez1845@gmail.com" method="POST" id="contact" data-aos="zoom-in">
              <legend className="legend">Contactame: <span id="okMsg"></span></legend>
              <label className="contact-label" form="name">Nombre:<span id="err-name">{name.msgName}</span></label>
              <input className="contact-input" type="text" name="name" id="name" onChange={handleOnBlurName} placeholder="Nombre*"/>
              <label className="contact-label" form="email">Correo:<span id="err-email">{email.msgEmail}</span></label>
              <input className="contact-input" type="email" name="email" id="email" onChange={handleOnBlurEmail} placeholder="Email*"/>
              <label className="contact-label" form="message">Mensaje:<span id="err-message">{message.msgMessage}</span></label>
              <textarea className="contact-input" type="text" name="message" id="message" onChange={handleOnBlurMessage}  placeholder="Mensaje*"/>
              <button className="btn-contact-err" id="btn-contact" disabled={true}>Enviar</button>
            </form>
          </div>
        )
}

export default Contact;
