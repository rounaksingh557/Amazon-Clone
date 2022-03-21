// Modules Import
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Files Import
import { useStateValue } from "../Context/StateProvider";

// Styles Import
import "../Styles/Product.css";
import "../Styles/CheckoutProduct.css";

export default function Product({ id, title, image, price, rating, key }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        key: key,
      },
    });
    console.log(id);
    toast(
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          marginTop: "30px",
          marginBottom: "30px",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginTop: "10px" }}> Check you cart now </h3>
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
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <Button variant="contained" onClick={addToBasket}>
        Add to Basket
      </Button>
      <div>
        {
          <Link to={"/checkout"}>
            <ToastContainer style={{ zIndex: 100, marginTop: 70 }} />{" "}
          </Link>
        }
      </div>
    </div>
  );
}
