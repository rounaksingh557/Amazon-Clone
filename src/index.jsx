// Modules Import
import React from "react";
import ReactDOM from "react-dom";

// Files Import
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Styles/index.css";

/**
 * This is the main entry point of the application.
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
