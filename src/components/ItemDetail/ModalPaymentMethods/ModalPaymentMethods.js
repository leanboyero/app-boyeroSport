import './ModalPaymentMethods.css';

import { Modal } from 'react-bootstrap';
import React from 'react';

const ModalPaymentMethods = (props) =>{
    const {show, onHide} = props;
    return (
        <Modal className='modal-payments' size="lg" show={show} onHide={onHide}  animation={false} centered > 
           <Modal.Header closeButton>
           <Modal.Title>Medios de pago</Modal.Title>
           </Modal.Header>
           <Modal.Body>Podés pagar tus compras con cualquiera de estos medios. Es rápido y seguro, siempre.<hr></hr>
           <h5>Tarjetas de crédito</h5>
           <div className='ui-vip-payment_methods'>
             <p><span className="blue">Hasta 6 cuotas sin interés</span> con estos bancos</p>
            <div className='ui-pdp-payment-icon'>
                    <img src="/assents/images/cards_credit.png" alt="card credit" />
            </div>
           </div>
           <div className='ui-vip-payment_methods'>
             <p>O hasta 12 cuotas con interés</p>
            <div className='ui-pdp-payment-icon'>
                    <img src="/assents/images/cards_credit2.png" alt="card credit 2" />
            </div>
           </div>
           <div className='ui-vip-payment_methods'>
             <h5>Tarjetas de débito</h5>
            <div className='ui-pdp-payment-icon'>
                    <img src="/assents/images/card_debit.png" alt="card debit" />
            </div>
           </div>
           <div className='ui-vip-payment_methods'>
           <h5>Efectivo</h5>
           </div>
           </Modal.Body>
         <Modal.Footer>

    </Modal.Footer></Modal>
    );
}

export default ModalPaymentMethods;