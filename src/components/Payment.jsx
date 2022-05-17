// Modules Import
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

// Files Import
import { useStateValue } from "../Context/StateProvider";
import CheckOutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../Context/Reducer";
import axios from "../Service/Axios";
import { db } from "../Database/FirebaseConfig";

// Styles Import
import "../Styles/Payment.css";

/**
 * Fetching location of the user.
 */

var location;

if (window.navigator.geolocation) {
  const successfulLookup = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9d70a7441de947b286e0daca613418ff`
    )
      .then((response) => response.json())
      .then((response) => {
        location = response.results[0].formatted;
      })
      .catch((error) => {
        alert(error);
      });
  };

  window.navigator.geolocation.getCurrentPosition(successfulLookup);
}

/**
 *
 * @returns The Payment Page
 *
 * Main Pages Starts From Here
 */

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = React.useState(false);
  const [processing, setProcessing] = React.useState("");

  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);

  const [clientSecret, setClientSecret] = React.useState(true);

  /**
   *
   * @returns This is the to Handle the response of the payment.
   */

  const history = useNavigate();

  React.useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="Payment">
      <div className="payment__Container">
        <h1>
          Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h2>Delivery Address </h2>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>{location}</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h2>Review Items and Delivery</h2>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
