import React from 'react';

const Select = (props) => {
  return (
    <div className="conversion-select">
      <select
        className="form-control"
        name="select"
      >
        {props.tab.units.map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;