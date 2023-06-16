import React, { useState } from "react";
import "./Calculator.css";

import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

const initialState = {
  displayValue: "0",
  mustClearDisplay: false,
  operator: null,
  values: [0, 0],
  indexCurrentValue: 0,
};

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [mustClearDisplay, setMustClearDisplay] = useState(false);
  const [operator, setOperator] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [indexCurrValue, setIndexCurrValue] = useState(0);

  function clearMemory() {
    setDisplayValue("0");
    setMustClearDisplay(false);
    setOperator(null);
    setValues([0, 0]);
    setIndexCurrValue(0);
  }

  function handleOperator(newOperator) {
    if (indexCurrValue === 0) {
      // Prepare for future operation
      setOperator(newOperator);
      setIndexCurrValue(1);
      setMustClearDisplay(true);
    } else {
      // Calculate result
      let result = values[0];

      switch (operator) {
        case "+":
          result += values[1];
          break;
        case "-":
          result -= values[1];
          break;
        case "*":
          result *= values[1];
          break;
        case "/":
          if (values[1] === 0) {
            clearMemory();
            setDisplayValue("Math Error");
            return;
          }
          result /= values[1];
          break;
      }

      // Update result
      setValues([result, 0]);

      // Check how to display the value if the result is an integer or float
      if (result % 1 === 0) setDisplayValue(result.toString());
      else setDisplayValue(result.toFixed(4));

      const isOperatorEqual = newOperator === "=";
      setOperator(isOperatorEqual ? null : newOperator);
      setIndexCurrValue(isOperatorEqual ? 0 : 1);
      setMustClearDisplay(true);
    }
  }

  function handleDigit(digit) {
    // Only one dot allowed per number
    if (digit === "." && displayValue.includes(".")) {
      return;
    }

    // Update display value
    const evalMustClearDisplay = displayValue === "0" || displayValue === "Math Error" || mustClearDisplay;
    const currenValue = evalMustClearDisplay ? "" : displayValue;
    const newDisplayValue = currenValue + digit;
    setDisplayValue(newDisplayValue);
    setMustClearDisplay(false);

    // Update numeric value
    if (digit != ".") {
      const newValue = parseFloat(newDisplayValue);
      const newValues = [...values];
      newValues[indexCurrValue] = newValue;
      setValues([...newValues]);
    }
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" onClick={clearMemory} triple />
      <Button label="/" onClick={handleOperator} operator />
      <Button label="7" onClick={handleDigit} />
      <Button label="8" onClick={handleDigit} />
      <Button label="9" onClick={handleDigit} />
      <Button label="*" onClick={handleOperator} operator />
      <Button label="4" onClick={handleDigit} />
      <Button label="5" onClick={handleDigit} />
      <Button label="6" onClick={handleDigit} />
      <Button label="-" onClick={handleOperator} operator />
      <Button label="1" onClick={handleDigit} />
      <Button label="2" onClick={handleDigit} />
      <Button label="3" onClick={handleDigit} />
      <Button label="+" onClick={handleOperator} operator />
      <Button label="0" onClick={handleDigit} double />
      <Button label="." onClick={handleDigit} />
      <Button label="=" onClick={handleOperator} />
    </div>
  );
}
