// Modules Import
import { Button } from "@material-ui/core";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

// Files Import
import { getBasketTotal } from "../Context/Reducer";
import { useStateValue } from "../Context/StateProvider";

// Styles Import
import "../Styles/Subtotal.css";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button variant="contained">Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;
