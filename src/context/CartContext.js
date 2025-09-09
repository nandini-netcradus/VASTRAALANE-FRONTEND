// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import config from "../config";
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   // ✅ Load cart and wishlist from backend on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const cartRes = await axios.get(`${config.API_URL}/api/cart`);
//         setCart(cartRes.data || []);

//         const wishlistRes = await axios.get(`${config.API_URL}/wishlist`);
//         setWishlist(wishlistRes.data || []);
//       } catch (err) {
//         console.error("Error loading cart/wishlist:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   // ✅ Add product to cart
//   const addToCart = async (product) => {
//     try {
//       const res = await axios.post(`${config.API_URL}/api/cart`, product);
//       setCart((prev) => [...prev, res.data]);
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//     }
//   };

//   // ✅ Remove product from cart
//   const removeFromCart = async (id) => {
//     try {
//       await axios.delete(`${config.API_URL}/api/cart/${id}`);
//       setCart((prev) => prev.filter((item) => item._id !== id));
//     } catch (err) {
//       console.error("Error removing from cart:", err);
//     }
//   };

//   // ✅ Add product to wishlist
//   const addToWishlist = async (product) => {
//     try {
//       const res = await axios.post(`${config.API_URL}/wishlist`, product);
//       setWishlist((prev) => [...prev, res.data]);
//     } catch (err) {
//       console.error("Error adding to wishlist:", err);
//     }
//   };

//   // ✅ Remove product from wishlist
//   const removeFromWishlist = async (id) => {
//     try {
//       await axios.delete(`${config.API_URL}/wishlist/${id}`);
//       setWishlist((prev) => prev.filter((item) => item._id !== id));
//     } catch (err) {
//       console.error("Error removing from wishlist:", err);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         wishlist,
//         addToWishlist,
//         removeFromWishlist,
//         setWishlist, // optional, for direct updates if needed
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load cart and wishlist from backend on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartRes = await axios.get(`${config.API_URL}/api/cart`);
        setCart(cartRes.data || []);

        const wishlistRes = await axios.get(`${config.API_URL}/wishlist`);
        setWishlist(wishlistRes.data || []);
      } catch (err) {
        console.error("Error loading cart/wishlist:", err);
      }
    };
    fetchData();
  }, []);

  // ✅ Add product to cart (backend returns full cart now)
  const addToCart = async (product) => {
    try {
      const res = await axios.post(`${config.API_URL}/api/cart`, product);
      setCart(res.data); // 🔑 backend se pura updated cart milega
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  // ✅ Remove product from cart (backend returns full cart now)
  const removeFromCart = async (id) => {
    try {
      const res = await axios.delete(`${config.API_URL}/api/cart/${id}`);
      setCart(res.data); // 🔑 backend se pura updated cart milega
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  // ✅ Add product to wishlist
  const addToWishlist = async (product) => {
    try {
      const res = await axios.post(`${config.API_URL}/wishlist`, product);
      setWishlist(res.data); // backend se pura wishlist return karwao
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  };

  // ✅ Remove product from wishlist
  const removeFromWishlist = async (id) => {
    try {
      const res = await axios.delete(`${config.API_URL}/wishlist/${id}`);
      setWishlist(res.data);
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
        setWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
