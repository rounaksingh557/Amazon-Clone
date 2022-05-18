// Modules Import
import React from "react";
import moment from "moment";

// Files Import
import OrderCheckoutProduct from "./OrderCheckOutProduct";

// Styles Import
import "../Styles/Order.css";

export default function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <OrderCheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
