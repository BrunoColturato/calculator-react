import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.setDigit = this.setDigit.bind(this);
  }

  clearMemory() {
    console.log("limpar");
  }

  setOperator(operator) {
    console.log(operator);
  }

  setDigit(digit) {
    console.log(digit);
  }

  render() {
    return (
      <div className="calculator">
        <Display value="100" />
        <Button label="AC" onClick={this.clearMemory} triple />
        <Button label="/" onClick={this.setOperator} operator />
        <Button label="7" onClick={this.setDigit} />
        <Button label="8" onClick={this.setDigit} />
        <Button label="9" onClick={this.setDigit} />
        <Button label="*" onClick={this.setOperator} operator />
        <Button label="4" onClick={this.setDigit} />
        <Button label="5" onClick={this.setDigit} />
        <Button label="6" onClick={this.setDigit} />
        <Button label="-" onClick={this.setOperator} operator />
        <Button label="1" onClick={this.setDigit} />
        <Button label="2" onClick={this.setDigit} />
        <Button label="3" onClick={this.setDigit} />
        <Button label="+" onClick={this.setOperator} operator />
        <Button label="0" onClick={this.setDigit} double />
        <Button label="." onClick={this.setDigit} />
        <Button label="=" onClick={this.setOperator} />
      </div>
    );
  }
}
