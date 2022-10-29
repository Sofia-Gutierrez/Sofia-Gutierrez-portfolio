import React, { useEffect, useState } from "react"
import AOS from 'aos';
import "../assets/scss/Contact.scss"

const Contact = () => {

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

  const btn = document.getElementById("btn-contact");

  useEffect(() => {

    AOS.init({
      duration : 2000
    });

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(name.value.length >= 4 && email.value.length >= 4 && message.value.length >= 4) {
      btn.classList.remove("btn-contact-err");
      btn.classList.add("btn-contact");
      btn.disabled = false
    }
  })
  
  
  const handleOnBlurName = (e) => {

    let name = e.target.value
    let msgName = "" 

    if(name.length < 4) {
      msgName = "Ingrese su Nombre";
      btn.classList.add("btn-contact-err");
      btn.classList.remove("btn-contact");
      btn.disabled = true
    }

    setName(currentValue => ({
      ...currentValue,
      value: e.target.value,
      msgName: msgName
    }))
  }

  const handleOnBlurEmail = (e) => {

    let email = e.target.value;
    let msgEmail = "";

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
        return(
            <form className="contact-form" id="contact" data-aos="zoom-in">
              <legend className="legend">Contactame: </legend>
              <label className="contact-label" form="name">Nombre:<span id="err-name">{name.msgName}</span></label>
              <input className="contact-input" type="text" name="name" id="name" onBlur={handleOnBlurName} placeholder="Nombre*"/>
              <label className="contact-label" form="email">Correo:<span id="err-email">{email.msgEmail}</span></label>
              <input className="contact-input" type="email" name="email" id="email" onBlur={handleOnBlurEmail} placeholder="Email*"/>
              <label className="contact-label" form="message">Mensaje:<span id="err-message">{message.msgMessage}</span></label>
              <textarea className="contact-input" type="text" name="message" id="message" onBlur={handleOnBlurMessage}  placeholder="Mensaje*"/>
              <button className="btn-contact-err" id="btn-contact" disabled={true}>Enviar</button>
            </form>
        )
}

export default Contact;
