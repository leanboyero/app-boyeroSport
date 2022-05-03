import './Footer.css';

import * as Icon from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import React from 'react';
import SuscriptionContainer from './SuscriptionContainer/SuscriptionContainer';
import logo from '../../logoFooter.png';

const Footer = () => {
  return (
<>
<footer className="text-center text-lg-start text-muted">
  <SuscriptionContainer />
  <section className="">
    <div className="container text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          <img src={logo} width="150" height="45" className="align-top" alt="logo"/>
          </h6>
          <p>
            Calle 1234, CABA, Argentina
          </p>
          <h5>DE LUNES A VIERNES DE 10 A 18 HS SÁBADOS DE 10 A 14 HS</h5>
          <p className="number-telephone"><Icon.Telephone  color="#6c757d" /> <strong>1234-123-1234</strong></p>
        </div>
 
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          BOYERO SPORT:
          </h6>
          <p>
          <Icon.ChevronRight  color="#47b2e4"/><Link to="/nosotros" className="text-reset">Quienes Somos</Link>
          </p>
          <p>
          <Icon.ChevronRight  color="#47b2e4"/><a href="#!" className="text-reset">Promociones</a>
          </p>
        </div>

        <div className="col-md-4">

          <h6 className="text-uppercase fw-bold mb-4">
          MARCAS:
          </h6>
          <ul className="marcas">
              <li><Link to="/brand/nike"><img src="/assents/images/marcas/brandNike.png" alt="brandNike" /></Link></li>
              <li><Link to="/brand/adidas"><img src="/assents/images/marcas/brandAdidas.png" alt="brandAdidas" /></Link></li>
              <li><Link to="/brand/topper"><img src="/assents/images/marcas/brandTopper.png" alt="brandTopper" /></Link></li>
              <li><Link to="/brand/puma"><img src="/assents/images/marcas/brandPuma.png" alt="brandPuma" /></Link></li>
          </ul>
          <ul className="marcas">
          <li><Link to="/brand/under%20armour"><img src="/assents/images/marcas/brandUnderArmour.png" alt="brandUnderArmour" /></Link></li>
          <li><Link to="/brand/fila"><img src="/assents/images/marcas/brandFila.png" alt="brandFila" /></Link></li>
          <li><Link to="/brand/garmin"><img src="/assents/images/marcas/brandGarmin.png" alt="brandGarmin" /></Link></li>
              <li><Link to="/brand/reebok"><img src="/assents/images/marcas/brandReebok.png" alt="brandReebok"/></Link></li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Seguinos:</h6>
          <div>
      <a href="https://www.facebook.com/leandro.boyero" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
        <Icon.Facebook size={23} color="#47b2e4"/>
      </a>
      <a href="https://ar.linkedin.com/in/leandro-ezequiel-boyero-720b84a8" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
      <Icon.Linkedin size={23} color="#47b2e4"/>
      </a>
      <a href="https://github.com/leanboyero" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
      <Icon.Github size={23} color="#47b2e4"/>
      </a>
    </div>
        </div>

      </div>

    </div>
  </section>
  <div className="p-4 footer-bottom" style={{backgroundColor: "#37517e"}}>
    <div className="copyright">©BOYERO SPORT - 2022 - TODOS LOS DERECHOS RESERVADOS.</div>
    <div>
        <img width="40" src="/assents/images/footer/visa@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/mastercard@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/amex@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/diners@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/banelco@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/cabal@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/tarjeta-naranja@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/tarjeta-shopping@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/mercadopago@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/argencard@2x.png" alt=""/>
        <img width="40" src="/assents/images/footer/cencosud@2x.png" alt=""/>
    </div>
   </div>
</footer>
</>

  );
}

export default Footer;