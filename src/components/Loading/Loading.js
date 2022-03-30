import './Loading.css';

import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({text}) => {
  return (
    <><Spinner animation="border" variant="primary" as="span" /> <p className='text-primary'>{text}</p></>
  )
};

export default Loading;