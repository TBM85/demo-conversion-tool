import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import equals from "../../assets/icons/equals.svg";

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
    <Tabs>
      <TabList>
        {toolTabs.map((tab) => (
          <Tab key={tab.id}>{tab.title}</Tab>
        ))}
      </TabList>

      {toolTabs.map((tab) => (
        <TabPanel key={tab.id}>
          <div className="conversion-container">
            <div className="conversion-control">
              <input type="number" className="conversion-input" />
              <div className="conversion-select">
                <select
                  className="form-control"
                  name="select"
                >
                  {tab.units.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>
            <img src={equals} alt="equals" width="20px" height="22px" />
            <div className="conversion-control">
              <div className="conversion-output"></div>
              <div className="conversion-select">
                <select
                  className="form-control"
                  name="select"
                >
                  {tab.units.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ToolTabs;
