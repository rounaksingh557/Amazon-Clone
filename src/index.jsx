// Modules Import
import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./Context/StateProvider";

// Files Import
import App from "./App";
import reducer, { initialState } from "./Context/Reducer";
import reportWebVitals from "./reportWebVitals";
import "./Styles/index.css";

/**
 * This is the main entry point of the application.
 */

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
