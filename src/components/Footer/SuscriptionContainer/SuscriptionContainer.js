import React from 'react';

const SuscriptionContainer = () => {
    const clickHandler = () => {
        alert('Te has suscripto');
    }
  return (
    <section className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Recibí nuestras promociones</h4>
          <div className="form">
            <input type="email" className="form-control"/><input type="submit" value="Suscribite" className="boton btn btn-primary" onClick={clickHandler} required />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default SuscriptionContainer;