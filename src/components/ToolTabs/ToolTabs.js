import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";

import classes from "./ToolTabs.module.scss";
import swap from "../../assets/icons/swap.svg";
import Select from "../UI/Select/Select";

const ToolTabs = (props) => {
  const { toolTabs } = props;

  const [inputValue, setInputValue] = useState(1);
  const [result, setResult] = useState(Number);

  const [inputSelect, setInputSelect] = useState("kilometer");
  const [outputSelect, setOutputSelect] = useState("meter");

  // Changes the value when a new one is entered
  const changeValueHandler = (event) => {
    setInputValue(event.target.value);
  };

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
  };

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

  // Swap selection units
  const swapUnitSelectHandler = () => {
    setInputSelect(outputSelect);
    setOutputSelect(inputSelect);
  };

  useEffect(() => {
    const mileMultiplier = 1.609344;
    const yardMultiplier = mileMultiplier / 1760;
    const footMultiplier = yardMultiplier / 3;
    const inchMultiplier = footMultiplier / 12;

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
      } else if (
        outputSelect === "millimeter" ||
        outputSelect === "milligram"
      ) {
        setResult(inputValue * 1000000);
      }
    } else if (inputSelect === "meter" || inputSelect === "gram") {
      if (outputSelect === "kilometer" || outputSelect === "kilogram") {
        setResult(inputValue / 1000);
      } else if (
        outputSelect === "millimeter" ||
        outputSelect === "milligram"
      ) {
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
      setResult(+((inputValue * (9 / 5) + 32).toFixed(2)));
    } else if (inputSelect === "fahrenheit" && outputSelect === "celsius") {
      setResult(+((inputValue - 32) * (5 / 9)).toFixed(2));
    }

    // Display the output values for length
    if (inputSelect === "kilometer") {
      if (outputSelect === "centimeter") {
        setResult(inputValue * 100000);
      } else if (outputSelect === "mile") {
        setResult(inputValue / mileMultiplier);
      } else if (outputSelect === "yard") {
        setResult(inputValue / yardMultiplier);
      } else if (outputSelect === "foot") {
        setResult(inputValue / footMultiplier);
      } else if (outputSelect === "inch") {
        setResult(inputValue / inchMultiplier);
      }
    } else if (inputSelect === "meter") {
      if (outputSelect === "centimeter") {
        setResult(inputValue * 100);
      } else if (outputSelect === "mile") {
        setResult(inputValue / mileMultiplier / 1000);
      } else if (outputSelect === "yard") {
        setResult(inputValue / yardMultiplier / 1000);
      } else if (outputSelect === "foot") {
        setResult(inputValue / footMultiplier / 1000);
      } else if (outputSelect === "inch") {
        setResult(inputValue / inchMultiplier / 1000);
      }
    } else if (inputSelect === "centimeter") {
      if (outputSelect === "kilometer") {
        setResult(inputValue / 100000);
      } else if (outputSelect === "meter") {
        setResult(inputValue / 100);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue * 10);
      } else if (outputSelect === "mile") {
        setResult(inputValue / mileMultiplier / 100000);
      } else if (outputSelect === "yard") {
        setResult(inputValue / yardMultiplier / 100000);
      } else if (outputSelect === "foot") {
        setResult(inputValue / footMultiplier / 100000);
      } else if (outputSelect === "inch") {
        setResult(inputValue / inchMultiplier / 100000);
      }
    } else if (inputSelect === "millimeter") {
      if (outputSelect === "centimeter") {
        setResult(inputValue / 10);
      } else if (outputSelect === "mile") {
        setResult(inputValue / mileMultiplier / 1000000);
      } else if (outputSelect === "yard") {
        setResult(inputValue / yardMultiplier / 1000000);
      } else if (outputSelect === "foot") {
        setResult(inputValue / footMultiplier / 1000000);
      } else if (outputSelect === "inch") {
        setResult(inputValue / inchMultiplier / 1000000);
      }
    } else if (inputSelect === "mile") {
      if (outputSelect === "kilometer") {
        setResult(inputValue * mileMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue * mileMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult(inputValue * mileMultiplier * 100000);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue * mileMultiplier * 1000000);
      } else if (outputSelect === "yard") {
        setResult((inputValue * mileMultiplier) / yardMultiplier);
      } else if (outputSelect === "foot") {
        setResult((inputValue * mileMultiplier) / footMultiplier);
      } else if (outputSelect === "inch") {
        setResult((inputValue * mileMultiplier) / inchMultiplier);
      }
    } else if (inputSelect === "yard") {
      if (outputSelect === "kilometer") {
        setResult(inputValue * yardMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue * yardMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult(inputValue * yardMultiplier * 100000);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue * yardMultiplier * 1000000);
      } else if (outputSelect === "mile") {
        setResult(inputValue / (mileMultiplier / yardMultiplier));
      } else if (outputSelect === "foot") {
        setResult(inputValue * (yardMultiplier / footMultiplier));
      } else if (outputSelect === "inch") {
        setResult(inputValue * (yardMultiplier / inchMultiplier));
      }
    } else if (inputSelect === "foot") {
      if (outputSelect === "kilometer") {
        setResult(inputValue * footMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue * footMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult(inputValue * footMultiplier * 100000);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue * footMultiplier * 1000000);
      } else if (outputSelect === "mile") {
        setResult(inputValue / (mileMultiplier / footMultiplier));
      } else if (outputSelect === "yard") {
        setResult(inputValue / (yardMultiplier / footMultiplier));
      } else if (outputSelect === "inch") {
        setResult(inputValue * (footMultiplier / inchMultiplier));
      }
    } else if (inputSelect === "inch") {
      if (outputSelect === "kilometer") {
        setResult(inputValue * inchMultiplier);
      } else if (outputSelect === "meter") {
        setResult(inputValue * inchMultiplier * 1000);
      } else if (outputSelect === "centimeter") {
        setResult(inputValue * inchMultiplier * 100000);
      } else if (outputSelect === "millimeter") {
        setResult(inputValue * inchMultiplier * 1000000);
      } else if (outputSelect === "mile") {
        setResult(inputValue / (mileMultiplier / inchMultiplier));
      } else if (outputSelect === "yard") {
        setResult(inputValue / (yardMultiplier / inchMultiplier));
      } else if (outputSelect === "foot") {
        setResult(inputValue / (footMultiplier / inchMultiplier));
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
        setResult((inputValue / stoneMultiplier) * 1000);
      } else if (outputSelect === "pound") {
        setResult((inputValue / poundMultiplier) * 1000);
      } else if (outputSelect === "ounce") {
        setResult((inputValue / ounceMultiplier) * 1000);
      }
    } else if (inputSelect === "stone") {
      if (outputSelect === "kilogram") {
        setResult(inputValue * stoneMultiplier);
      } else if (outputSelect === "gram") {
        setResult(inputValue * stoneMultiplier * 1000);
      } else if (outputSelect === "milligram") {
        setResult(inputValue * stoneMultiplier * 1000000);
      } else if (outputSelect === "tonne") {
        setResult((inputValue * stoneMultiplier) / 1000);
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
        setResult((inputValue * poundMultiplier) / 1000);
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
        setResult((inputValue * ounceMultiplier) / 1000);
      } else if (outputSelect === "stone") {
        setResult(inputValue / (stoneMultiplier / ounceMultiplier));
      } else if (outputSelect === "pound") {
        setResult(inputValue / (poundMultiplier / ounceMultiplier));
      }
    }
  }, [inputSelect, inputValue, outputSelect]);

  return (
    <Tabs className={classes.Tabs}>
      <TabList>
        {toolTabs.map((tab) => (
          <Tab key={tab.id} onClick={changeTabHandler}>
            {tab.title}
          </Tab>
        ))}
      </TabList>

      {toolTabs.map((tab) => (
        <TabPanel key={tab.id} className={classes.TabPanel}>
          <div className={classes["conversion-container"]}>
            <div className={classes["conversion-control"]}>
              <input
                type="number"
                className={classes["conversion-input"]}
                aria-label="number input"
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
            <button
              type="button"
              onClick={swapUnitSelectHandler}
              aria-label="Swap Units"
            >
              <img src={swap} alt="swap" width="30px" height="30px" />
            </button>
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

ToolTabs.propTypes = {
  inputValue: PropTypes.number,
  result: PropTypes.number,
  inputSelect: PropTypes.string,
  outputSelect: PropTypes.string
};
