import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import classes from "./ToolTabs.module.scss";
import swap from "../../assets/icons/swap.svg";
import Select from "../UI/Select/Select";

const ToolTabs = (props) => {
  const { toolTabs } = props;
  
  const [inputValue, setInputValue] = useState(1);
  const changeValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const [result, setResult] = useState();
  
  const [inputSelect, setInputSelect] = useState("kilometer");
  const [outputSelect, setOutputSelect] = useState("meter");

  useEffect(() => {
    // Displays the same output value when both selected options are equal
    if (inputSelect === outputSelect) {
      setResult(inputValue);
    }

    // Display the output values for temperature
    if (inputSelect === "celsius" && outputSelect === "fahrenheit") {
      setResult((inputValue * (9/5) + 32).toFixed(2));
    } else if (inputSelect === "fahrenheit" && outputSelect === "celsius") {
      setResult(((inputValue - 32) * (5/9)).toFixed(2));
    }

  }, [inputSelect, inputValue, outputSelect]);

  // Define the default values when you click on a tab
  const changeTabHandler = (event) => {
    let selectedTab = event.target.hasAttribute("aria-selected");
    let selectedTabText = event.target.textContent;

    if (selectedTab) {
      if (selectedTabText === "Length") {
        setInputSelect(toolTabs[0].units[0]);
        setOutputSelect(toolTabs[0].units[1]);
      } else if (selectedTabText === "Temperature") {
        setInputSelect(toolTabs[1].units[0]);
        setOutputSelect(toolTabs[1].units[1]);
      } else if (selectedTabText === "Weight") {
        setInputSelect(toolTabs[2].units[0]);
        setOutputSelect(toolTabs[2].units[1]);
      }
    }
  }

  // Change the selected value when you click on another option
  const changeInputValueHandler = (event) => {
    let selectedValue = event.target.value;

    setInputSelect(selectedValue);
  };

  // Change the selected value when you click on another option
  const changeOutputValueHandler = (event) => {
    let selectedValue = event.target.value;

    setOutputSelect(selectedValue);
  };

  return (
    <Tabs className={classes.Tabs}>
      <TabList>
        {toolTabs.map((tab) => (
          <Tab key={tab.id} onClick={changeTabHandler}>{tab.title}</Tab>
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
              <Select
                tab={tab}
                className={classes["conversion-select"]}
                value={inputSelect}
                onChange={changeInputValueHandler}
              />
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
              <Select
                tab={tab}
                className={classes["conversion-select"]}
                value={outputSelect}
                onChange={changeOutputValueHandler}
              />
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ToolTabs;