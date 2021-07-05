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
    const mileMultiplier = 1.60934;
    const yardMultiplier = 1093.61329;
    const footMultiplier = 3280.83989;
    const inchMultiplier = 39370.07874;

    const tonneMultiplier = 1000;
    const stoneMultiplier = 6.35029;
    const poundMultiplier = stoneMultiplier / 14;
    const ounceMultiplier = poundMultiplier / 16;

    // Displays the same output value when both selected options are equal
    if (inputSelect === outputSelect) {
      setResult(inputValue);
    }

    // Display the output values for the combination of the following units:
    // kilometer, meter, millimeter, kilogram, gram, and milligram
    if (inputSelect === "kilometer" || inputSelect === "kilogram") {
      if (outputSelect === "meter" || outputSelect === "gram") {
        setResult(inputValue * 1000);
      } else if (outputSelect === "millimeter" || outputSelect === "milligram") {
        setResult(inputValue * 1000000);
      }
    } else if (inputSelect === "meter" || inputSelect === "gram") {
      if (outputSelect === "kilometer" || outputSelect === "kilogram") {
        setResult(inputValue / 1000);
      } else if (outputSelect === "millimeter" || outputSelect === "milligram") {
        setResult(inputValue * 1000);
      }
    } else if (inputSelect === "millimeter" || inputSelect === "milligram") {
      if (outputSelect === "kilometer" || outputSelect === "kilogram") {
        setResult(inputValue / 1000000);
      } else if (outputSelect === "meter" || outputSelect === "gram") {
        setResult(inputValue / 1000);
      }
    }

    // Display the output values for temperature
    if (inputSelect === "celsius" && outputSelect === "fahrenheit") {
      setResult((inputValue * (9/5) + 32).toFixed(2));
    } else if (inputSelect === "fahrenheit" && outputSelect === "celsius") {
      setResult(((inputValue - 32) * (5/9)).toFixed(2));
    }

    // Display the output values for length
    if (inputSelect === "kilometer") {
      if (outputSelect === "centimeter") {
        setResult(inputValue * 100000);
      } else if (outputSelect === "mile") {
        setResult(inputValue / mileMultiplier);
      } else if (outputSelect === "yard") {
        setResult(inputValue * yardMultiplier);
      } else if (outputSelect === "foot") {
        setResult(inputValue * footMultiplier);
      } else if (outputSelect === "inch") {
        setResult(inputValue * inchMultiplier);
      }
    } else if (inputSelect === "meter") {
      if (outputSelect === "centimeter") {
        setResult(inputValue * 100);
      } else if (outputSelect === "mile") {
        setResult((inputValue / mileMultiplier) / 1000);
      } else if (outputSelect === "yard") {
        setResult((inputValue * yardMultiplier) / 1000);
      } else if (outputSelect === "foot") {
        setResult((inputValue * footMultiplier) / 1000);
      } else if (outputSelect === "inch") {
        setResult((inputValue * inchMultiplier) / 1000);
      }
    } else if (inputSelect === "centimeter") {
      if (outputSelect === "kilometer") {
        setResult(inputValue / 100000);
      } else if (outputSelect === "meter") {
        setResult(inputValue / 100);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue * 10);
      } else if (outputSelect === "mile") {
        setResult((inputValue / mileMultiplier) / 100000);
      } else if (outputSelect === "yard") {
        setResult((inputValue * yardMultiplier) / 100000);
      } else if (outputSelect === "foot") {
        setResult((inputValue * footMultiplier) / 100000);
      } else if (outputSelect === "inch") {
        setResult((inputValue * inchMultiplier) / 100000);
      }
    } else if (inputSelect === "millimeter") {
      if (outputSelect === "centimeter") {
        setResult(inputValue / 10);
      } else if (outputSelect === "mile") {
        setResult((inputValue / mileMultiplier) / 1000000);
      } else if (outputSelect === "yard") {
        setResult((inputValue * yardMultiplier) / 1000000);
      } else if (outputSelect === "foot") {
        setResult((inputValue * footMultiplier) / 1000000);
      } else if (outputSelect === "inch") {
        setResult((inputValue * inchMultiplier) / 1000000);
      }
    } else if (inputSelect === "mile") {
      if (outputSelect === "kilometer") {
        setResult(inputValue * mileMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue * mileMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult((inputValue * mileMultiplier * 100000));
      } else if (outputSelect === "millimeter") {
        setResult((inputValue * mileMultiplier * 1000000));
      } else if (outputSelect === "yard") {
        setResult(inputValue * 1760);
      } else if (outputSelect === "foot") {
        setResult(inputValue * 5280);
      } else if (outputSelect === "inch") {
        setResult(inputValue * 63360);
      }
    } else if (inputSelect === "yard") {
      if (outputSelect === "kilometer") {
        setResult(inputValue / yardMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue / yardMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult(inputValue / yardMultiplier * 100000);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue / yardMultiplier * 1000000);
      } else if (outputSelect === "mile") {
        setResult(inputValue / 1760);
      } else if (outputSelect === "foot") {
        setResult(inputValue * 3);
      } else if (outputSelect === "inch") {
        setResult(inputValue * 36);
      }
    } else if (inputSelect === "foot") {
      if (outputSelect === "kilometer") {
        setResult(inputValue / footMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue / footMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult(inputValue / footMultiplier * 100000);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue / footMultiplier * 1000000);
      } else if (outputSelect === "mile") {
        setResult((inputValue / 5280).toFixed(6));
      } else if (outputSelect === "yard") {
        setResult((inputValue / 3).toFixed(6));
      } else if (outputSelect === "inch") {
        setResult(inputValue * 12);
      }
    } else if (inputSelect === "inch") {
      if (outputSelect === "kilometer") {
        setResult(inputValue / inchMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue / inchMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult(inputValue / inchMultiplier * 100000);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue / inchMultiplier * 1000000);
      } else if (outputSelect === "mile") {
        setResult(inputValue / 63360);
      } else if (outputSelect === "yard") {
        setResult(inputValue / 36);
      } else if (outputSelect === "foot") {
        setResult(inputValue / 12);
      }
    }

    // Display the output values for weight
    if (inputSelect === "kilogram") {
      if (outputSelect === "tonne") {
        setResult(inputValue / tonneMultiplier);
      } else if (outputSelect === "stone") {
        setResult(inputValue / stoneMultiplier);
      } else if (outputSelect === "pound") {
        setResult(inputValue / poundMultiplier);
      } else if (outputSelect === "ounce") {
        setResult(inputValue / ounceMultiplier);
      }
    } else if (inputSelect === "gram") {
      if (outputSelect === "tonne") {
        setResult(inputValue / (tonneMultiplier * 1000));
      } else if (outputSelect === "stone") {
        setResult(inputValue / (stoneMultiplier * 1000));
      } else if (outputSelect === "pound") {
        setResult(inputValue / (poundMultiplier * 1000));
      } else if (outputSelect === "ounce") {
        setResult(inputValue / (ounceMultiplier * 1000));
      }
    } else if (inputSelect === "milligram") {
      if (outputSelect === "tonne") {
        setResult(inputValue / (tonneMultiplier * 1000000));
      } else if (outputSelect === "stone") {
        setResult(inputValue / (stoneMultiplier * 1000000));
      } else if (outputSelect === "pound") {
        setResult(inputValue / (poundMultiplier * 1000000));
      } else if (outputSelect === "ounce") {
        setResult(inputValue / (ounceMultiplier * 1000000));
      }
    } else if (inputSelect === "tonne") {
      if (outputSelect === "kilogram") {
        setResult(inputValue * tonneMultiplier);
      } else if (outputSelect === "gram") {
        setResult(inputValue * tonneMultiplier * 1000);
      } else if (outputSelect === "milligram") {
        setResult(inputValue * tonneMultiplier * 1000000);
      } else if (outputSelect === "stone") {
        setResult(inputValue / stoneMultiplier * 1000);
      } else if (outputSelect === "pound") {
        setResult(inputValue / poundMultiplier * 1000);
      } else if (outputSelect === "ounce") {
        setResult(inputValue / ounceMultiplier * 1000);
      }
    } else if (inputSelect === "stone") {
      if (outputSelect === "kilogram") {
        setResult(inputValue * stoneMultiplier);
      } else if (outputSelect === "gram") {
        setResult(inputValue * stoneMultiplier * 1000);
      } else if (outputSelect === "milligram") {
        setResult(inputValue * stoneMultiplier * 1000000);
      } else if (outputSelect === "tonne") {
        setResult(inputValue * stoneMultiplier / 1000);
      } else if (outputSelect === "pound") {
        setResult(inputValue * (stoneMultiplier / poundMultiplier));
      } else if (outputSelect === "ounce") {
        setResult(inputValue * (stoneMultiplier / ounceMultiplier));
      }
    } else if (inputSelect === "pound") {
      if (outputSelect === "kilogram") {
        setResult(inputValue * poundMultiplier);
      } else if (outputSelect === "gram") {
        setResult(inputValue * poundMultiplier * 1000);
      } else if (outputSelect === "milligram") {
        setResult(inputValue * poundMultiplier * 1000000);
      } else if (outputSelect === "tonne") {
        setResult(inputValue * poundMultiplier / 1000);
      } else if (outputSelect === "stone") {
        setResult(inputValue / (stoneMultiplier / poundMultiplier));
      } else if (outputSelect === "ounce") {
        setResult(inputValue * (poundMultiplier / ounceMultiplier));
      }
    } else if (inputSelect === "ounce") {
      if (outputSelect === "kilogram") {
        setResult(inputValue * ounceMultiplier);
      } else if (outputSelect === "gram") {
        setResult(inputValue * ounceMultiplier * 1000);
      } else if (outputSelect === "milligram") {
        setResult(inputValue * ounceMultiplier * 1000000);
      } else if (outputSelect === "tonne") {
        setResult(inputValue * ounceMultiplier / 1000);
      } else if (outputSelect === "stone") {
        setResult(inputValue / (stoneMultiplier / ounceMultiplier));
      } else if (outputSelect === "pound") {
        setResult(inputValue / (poundMultiplier / ounceMultiplier));
      }
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