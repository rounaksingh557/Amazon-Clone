// Modules Import
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Files Import
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./Database/FirebaseConfig";

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
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
        <Routes>
          <Route path="/orders" element={<h1>Orders</h1>} />
        </Routes>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
