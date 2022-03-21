// Modules Imports
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";

// Files Import
import { useStateValue } from "../Context/StateProvider";

// Styles Import
import "../Styles/CheckoutProduct.css";

const CheckoutProduct = React.forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id,
      });
      toast.success(title + " " + "removed from basket");
      console.log(id);
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <Button variant="contained" onClick={removeFromBasket}>
              Remove from Basket
            </Button>
          )}
          <ToastContainer />
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
