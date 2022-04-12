import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

const ConfirmAlert = props => {

  const {show, text, title, onCancel, onConfirm} = props;

  return (
    <SweetAlert 
    show={show}
    warning
    showCancel
    confirmBtnText="Si, eliminar"
    confirmBtnBsStyle="danger"
    cancelBtnBsStyle="default"
    title={title}
    onCancel={onCancel}
    onConfirm={onConfirm}> {text} </SweetAlert>
  )
};

export default ConfirmAlert;