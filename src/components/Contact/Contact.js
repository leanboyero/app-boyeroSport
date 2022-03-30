import  './Contact.css';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
     <div className="section-header" style={{background: "url('/assents/images/contact/contact.jpg')center center no-repeat", backgroundSize: 'cover'}}>
                        <h1><Link to={"/"} className="icon-back"></Link>Contacto</h1></div>
      <div className="row container">
      <p>¡Estamos a tu disposición para que nos hagas tu consulta! Si creés que podemos ayudarte, dejanos tus datos y nos vamos a poner en contacto contigo a la brevedad.</p>
      <div className="form">
                        <form  className="contactForm">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" name="nombre" className="form-control" id="name" placeholder="Tu Nombre" data-rule="minlen:4" data-msg="Por favor ingrese al menos 4 caracteres"/>
                                    <div className="validation" role="alert"></div>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Tu Email" data-rule="email" data-msg="Por favor ingrese un email valido" />
                                    <div className="validation" role="alert"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Por favor ingrese al menos 8 caracteres para el asunto"/>
                                <div className="validation" role="alert"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="mensaje" rows="5" id="message" placeholder="Mensaje" data-rule="required" data-msg="Por favor ingrese algun comentario"></textarea>
                                <div className="validation" role="alert"></div>
                            </div>
                            <div className="text-center sector-boton"><Button className="boton" type="submit">Enviar</Button><div className="wait"></div></div>
                        </form>
                    </div>
      </div>
    </div>
  )
}

export default Contact