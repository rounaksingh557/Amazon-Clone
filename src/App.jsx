// Modules Import
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Files Import
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

// Styles Import
import "./Styles/App.css";

/**
 * This Files Contains Routing System of Amazon Clone.
 *
 * ⚠️Note: `react-router-dom version` `6.2.1` is used in this project and may change it the future.
 *
 * @see https://reactrouter.com/docs/en/v6/upgrading/v5
 */

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
