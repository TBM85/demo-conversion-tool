import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import classes from "./ToolTabs.module.scss";
import swap from "../../assets/icons/swap.svg";
import Select from "../UI/Select/Select";

const toolTabs = [
  {
    id: 1,
    title: "Length",
    units: [
      "kilometer",
      "meter",
      "centimeter",
      "millimeter",
      "micrometer",
      "nanometer",
      "mile",
      "yard",
      "foot",
      "inch",
    ],
  },
  { id: 2, title: "Temperature", units: ["celsius", "fahrenheit"] },
  {
    id: 3,
    title: "Weight",
    units: [
      "kilogram",
      "gram",
      "milligram",
      "microgram",
      "tonne",
      "stone",
      "pound",
      "ounce",
    ],
  },
];

const ToolTabs = () => {
  const [inputValue, setInputValue] = useState(1);
  const changeValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const [result, setResult] = useState();
  useEffect(() => {
    setResult(inputValue);
  }, [inputValue]);

  const [inputSelect, setInputSelect] = useState();
  const inputValueHandler = (selectValue) => {
    setInputSelect(selectValue);
  }

  console.log(inputSelect);

  const [outputSelect, setOutputSelect] = useState();
  const outputValueHandler = (selectValue) => {
    setOutputSelect(selectValue);
  }

  console.log(outputSelect);

  return (
    <Tabs className={classes.Tabs}>
      <TabList>
        {toolTabs.map((tab) => (
          <Tab key={tab.id}>{tab.title}</Tab>
        ))}
      </TabList>

      {toolTabs.map((tab) => (
        <TabPanel key={tab.id} className={classes.TabPanel}>
          <div className={classes["conversion-container"]}>
            <div className={classes["conversion-control"]}>
              <input
                type="number"
                className={classes["conversion-input"]}
                value={inputValue}
                onChange={changeValueHandler}
              />
              <Select tab={tab} className={classes["conversion-select"]} onSelectValue={inputValueHandler} />
            </div>
            <img
              src={swap}
              alt="equals"
              width="20px"
              height="22px"
              className={classes["conversion-img"]}
            />
            <div className={classes["conversion-control"]}>
              <div className={classes["conversion-output"]}>{result}</div>
              <Select tab={tab} className={classes["conversion-select"]} onSelectValue={outputValueHandler} />
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ToolTabs;
