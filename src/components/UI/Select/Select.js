import React, { useEffect, useState } from 'react';

import classes from './Select.module.scss';

const Select = (props) => {
  const [selectValue, setSelectValue] = useState("");
  const changeSelectHandler = (event) => {
    let selectedValue = event.target.value;

    setSelectValue(selectedValue);
  }

  useEffect(() => {
    props.onSelectValue(selectValue);
  }, [props, selectValue]);

  return (
    <div className={classes["conversion-select"]}>
      <select
        className="form-control"
        name="select"
        value={selectValue}
        onChange={changeSelectHandler}
      >
        {props.tab.units.map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;