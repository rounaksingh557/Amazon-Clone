// Modules Import
import React from "react";

// Files Import
import { db } from "../Database/FirebaseConfig";
import { useStateValue } from "../Context/StateProvider";
import Order from "./Order";

// Styles Import
import "../Styles/Orders.css";

export default function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}
