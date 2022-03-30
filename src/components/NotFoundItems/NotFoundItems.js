import './NotFoundItems.css';

import * as Icon from 'react-bootstrap-icons';

import React from 'react';

const NotFoundItems = props => {
  const {text} = props;
  return (
    <div className="row container">
      <div className="not-found-items">
      <Icon.ExclamationCircle size={35}/>
        <h5>{text}</h5>
      </div>
    </div>
  );
}
export default NotFoundItems;