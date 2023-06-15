import React from "react";
import "./Button.css";

export default function Button({ label, double, triple, operator, onClick }) {
  function handleClasses() {
    let classes = "button";
    classes += double ? " double" : "";
    classes += triple ? " triple" : "";
    classes += operator ? " operator" : "";

    return classes;
  }

  return (
    <button className={handleClasses()} onClick={() => onClick && onClick(label)}>
      {label}
    </button>
  );
}
