// Modules Import
import React from "react";
import Subtotal from "./Subtotal";
import Flipmove from "react-flip-move";

// Files Import
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../Context/StateProvider";
import Header from "./Header";

// Styles Import
import "../Styles/Checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
            <Flipmove
              easing="ease-out"
              duration={500}
              leaveAnimation="elevator"
            >
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </Flipmove>
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
