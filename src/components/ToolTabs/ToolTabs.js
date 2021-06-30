import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const toolTabs = [
  {id: 1, title: "Length"},
  {id: 2, title: "Temperature"},
  {id: 3, title: "Weight"}
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
          <h2>{tab.title}</h2>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ToolTabs;