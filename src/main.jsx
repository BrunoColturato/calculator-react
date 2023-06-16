import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./main/Calculator.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main">
      <Calculator />
      <footer>
        <p>
          Coded by{" "}
          <a href="https://brunocolturato.github.io/" target="_blank">
            Bruno Alvarenga Colturato
          </a>
          .
        </p>
      </footer>
    </div>
  </React.StrictMode>
);
