import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import classes from "./ToolTabs.module.scss";
import equals from "../../assets/icons/equals.svg";
import Select from "../UI/Select/Select";

const toolTabs = [
  {
    id: 1,
    title: "Length",
    units: ["kilometer", "meter", "centimeter", "millimeter", "micrometer", "nanometer", "mile", "yard", "foot", "inch"],
  },
  { id: 2, title: "Temperature", units: ["celsius", "fahrenheit"] },
  { id: 3, title: "Weight", units: ["kilogram", "gram", "milligram", "microgram", "tonne", "stone", "pound", "ounce"] },
];

const ToolTabs = () => {
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
              <input type="number" className={classes["conversion-input"]} />
              <Select tab={tab} className={classes["conversion-select"]} />
            </div>
            <img src={equals} alt="equals" width="20px" height="22px" className={classes["conversion-img"]} />
            <div className={classes["conversion-control"]}>
              <div className={classes["conversion-output"]}></div>
              <Select tab={tab} className={classes["conversion-select"]} />
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ToolTabs;
