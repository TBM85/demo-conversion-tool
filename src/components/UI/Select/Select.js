import React from 'react';

import classes from './Select.module.scss';

const Select = (props) => {
  return (
    <div className={classes["conversion-select"]}>
      <select
        name="select"
        value={props.value}
        onChange={props.onChange}
      >
        {props.tab.units.map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;