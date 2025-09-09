

import React from "react";
 import { useCart } from "../context/CartContext";
import "../scss/CartPage.scss";
const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginTop: "100px" }}>Your Cart</h1>

      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              <img src={item.image} alt={item.name} width="50" />
              {item.name} - ₹{item.price} x {item.quantity} (Size: {item.size})
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};
export default CartPage;  