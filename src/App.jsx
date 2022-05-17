// Modules Import
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Files Import
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./Database/FirebaseConfig";

// Styles Import
import "./Styles/App.css";

// Initialize Stripe
const promise = loadStripe(
  "pk_test_51Kzz3JSFbSpGKBBsxMqctki2BPHV47ipFB0ZWsjvz8IPGM8H23ar4DAOgijCzxR7GhPtSz7N5PVlMDbaD8Xmw3Bf00LQBPPjsk"
);

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
          <Route
            path="/payment"
            element={
              <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
