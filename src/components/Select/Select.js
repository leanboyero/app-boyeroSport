import React from 'react';

const Select = ({options=[], onSelect}) => {
    const handleSelect = (e) => {
        onSelect(e.target.value);
    }
  return (
    <div className="row mb-4">
     <div className="col-md-4 col-6 mb-2" >
     <label className="form-label">Talle </label>
     <div className="input-group">
      <select className="form-select" onChange={handleSelect}>
      {options.map((element, index) =><option key={index} value={element}>{element}</option>)}
       </select>
      </div>
      </div>
    </div>
  );
};

export default Select;