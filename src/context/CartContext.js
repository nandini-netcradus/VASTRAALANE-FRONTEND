import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load cart and wishlist from backend on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartRes = await axios.get("http://localhost:5000/api/cart");
        setCart(cartRes.data || []);

        const wishlistRes = await axios.get("http://localhost:5000/wishlist");
        setWishlist(wishlistRes.data || []);
      } catch (err) {
        console.error("Error loading cart/wishlist:", err);
      }
    };
    fetchData();
  }, []);

  // ✅ Add product to cart
  const addToCart = async (product) => {
    try {
      const res = await axios.post("http://localhost:5000/api/cart", product);
      setCart((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  // ✅ Remove product from cart
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      setCart((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  // ✅ Add product to wishlist
  const addToWishlist = async (product) => {
    try {
      const res = await axios.post("http://localhost:5000/wishlist", product);
      setWishlist((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  };

  // ✅ Remove product from wishlist
  const removeFromWishlist = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/wishlist/${id}`);
      setWishlist((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        setWishlist, // optional, for direct updates if needed
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
