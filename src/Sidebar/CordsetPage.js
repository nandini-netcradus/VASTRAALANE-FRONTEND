import React, { useState } from "react";
import "../scss/_cordsetPage.scss";
import { useCart } from "../context/CartContext";

// ✅ Tracksuit Images
import AdidasRedLogo from "../assets/Adida s Red Logo Print Premium Imported Tracksuit.png";
import AirJordanBlack from "../assets/Air Jordan Black Premium Oversized Cord Set - Copy (2).png";
import AirJordanCream from "../assets/Air Jordan Cream Premium Oversized Cord Set - Copy (2).png";
import AirJordanNavy from "../assets/Air Jordan Navy Blue Premium Oversized Cord Set - Copy (3).png";
import ArmaniExchangeWhite from "../assets/Arman i Exchange White Embroidered Patch Logo Eagle Edition Imported Fabric Tracksuit With Carry Bag 2631.png";

import BalmainBlack from "../assets/Balmai n Paris Black Premium Imported Japanese Fabric Monogram Printed Tracksuit 2844.png";
import BalmainNavy from "../assets/Balmai n Paris Navy Premium Imported Japanese Fabric Monogram Printed Tracksuit 2843 - Copy (3).png";
import BalmainWhite from "../assets/Balmai n Paris White Premium Imported Japanese Fabric Monogram Printed Tracksuit 2845 - Copy (3).png";
import BossDarkGrey from "../assets/Boss Dark Grey Embroidered Logo Design with Jacquard Fabric Premium Tracksuit with Carry Bag 22572.png";
import BurberryWhite from "../assets/Burberr y White Embroidered Logo Imported Fabric Tracksuit With Carry Bag 2461 - Copy.png";
import DieselBeige from "../assets/Diese l Beige Back Print Premium Oversized Cord Set - Copy (2).png";
import DieselCream from "../assets/Diese l Cream Back Print Premium Oversized Cord Set - Copy.png";
import DieselGreen from "../assets/Diese l Green Back Print Premium Oversized Cord Set - Copy.png";
// import GucciKhakhi from "../assets/Gucci_GG_Monogram_Canvas_Leather_Espadrilles_Khakhi_With_OG_Box_&_Carry_Bag_888-100_Khakhi - Copy (2).png";
import HoodRichGrey from "../assets/HoodRich Grey Embroidery Logo Imported Tracksuit - Copy (2).png";
import LouisVuittonBlackBeige from "../assets/Louis Vuitton Black Beige Monogram Imported Premium Tracksuit With Carry Bag - Copy.png";
import LouisVuittonBlackWhite from "../assets/Louis Vuitton Black White Monogram Imported Premium Tracksuit With Carry Bag - Copy.png";
import LouisVuittonWhite from "../assets/Louis Vuitton White Monogram Imported Premium Tracksuit With Carry Bag - Copy.png";
import ZaraBlack from "../assets/Zar a Black Premium Knitted Classic Cord Set.png";

// ✅ Tracksuit Array
const tracksuits = [
  { id: 1, name: "Adidas Red Logo Print Premium Imported Tracksuit", price: 2500, oldPrice: 3000, discount: "6% off", image: AdidasRedLogo },
  { id: 2, name: "Air Jordan Black Premium Oversized Cord Set", price: 1500, oldPrice: 2000, discount: "10% off", image: AirJordanBlack },
  { id: 3, name: "Air Jordan Cream Premium Oversized Cord Set", price: 1800, oldPrice: 2000, discount: "10% off", image: AirJordanCream },
  { id: 4, name: "Air Jordan Navy Blue Premium Oversized Cord Set", price: 1800, oldPrice: 2000, discount: "10% off", image: AirJordanNavy },
  { id: 5, name: "Armani Exchange White Embroidered Patch Logo Eagle Edition Imported Fabric Tracksuit", price: 2200, oldPrice: 2400, discount: "8% off", image: ArmaniExchangeWhite },
  
  { id: 7, name: "Balmain Paris Black Premium Imported Japanese Fabric Monogram Printed Tracksuit", price: 2500, oldPrice: 2700, discount: "7% off", image: BalmainBlack },
  { id: 8, name: "Balmain Paris Navy Premium Imported Japanese Fabric Monogram Printed Tracksuit", price: 2500, oldPrice: 2700, discount: "7% off", image: BalmainNavy },
  { id: 9, name: "Balmain Paris White Premium Imported Japanese Fabric Monogram Printed Tracksuit", price: 2500, oldPrice: 2700, discount: "7% off", image: BalmainWhite },
  { id: 10, name: "Boss Dark Grey Embroidered Logo Design with Jacquard Fabric Premium Tracksuit", price: 1800, oldPrice: 2000, discount: "10% off", image: BossDarkGrey },
  { id: 11, name: "Burberry White Embroidered Logo Imported Fabric Tracksuit", price: 2200, oldPrice: 2400, discount: "8% off", image: BurberryWhite },
  { id: 12, name: "Diesel Beige Back Print Premium Oversized Cord Set", price: 2999.00, oldPrice: 4000, discount: "6% off", image: DieselBeige },
  { id: 13, name: "Diesel Cream Back Print Premium Oversized Cord Set", price: 2000, oldPrice: 4000, discount: "6% off", image: DieselCream },
  { id: 14, name: "Diesel Green Back Print Premium Oversized Cord Set", price: 3000, oldPrice: 5000, discount: "6% off", image: DieselGreen },
  // { id: 15, name: "Gucci GG Monogram Canvas Leather Espadrilles Khakhi", price: 30000, oldPrice: 32000, discount: "6% off", image: GucciKhakhi },
  { id: 16, name: "HoodRich Grey Embroidery Logo Imported Tracksuit", price:6000, oldPrice: 7000, discount: "6% off", image: HoodRichGrey },
  { id: 17, name: "Louis Vuitton Black Beige Monogram Imported Premium Tracksuit", price: 2999.00, oldPrice: 4000, discount: "5% off", image: LouisVuittonBlackBeige },
  { id: 18, name: "Louis Vuitton Black White Monogram Imported Premium Tracksuit", price: 1970.00, oldPrice: 2000, discount: "5% off", image: LouisVuittonBlackWhite },
  { id: 19, name: "Louis Vuitton White Monogram Imported Premium Tracksuit", price: 4000, oldPrice: 4200, discount: "5% off", image: LouisVuittonWhite },
  { id: 20, name: "Zara Black Premium Knitted Classic Cord Set", price: 1400, oldPrice: 1500, discount: "6% off", image: ZaraBlack },
];

const Tracksuits = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }

    const cartItem = {
      ...selectedProduct,
      size: selectedSize,
      quantity: quantity,
      image: selectedProduct.image,
    };

    addToCart(cartItem);
    console.log("Added to cart:", cartItem);

    // ✅ Show popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);

  };

  // ✅ Product List
  if (!selectedProduct) {
    return (
      <div className="tracksuits-container">
        <h2 className="tracksuits-title">Tracksuit Collection</h2>
        <div className="tracksuits-grid">
          {tracksuits.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => setSelectedProduct(item)}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ✅ Product Detail with Extra Info
  return (
    <div className="product-detail">
      <div className="detail-content">
        {/* Left Image */}
        <div className="detail-left">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>

        {/* Right Info */}
        <div className="detail-right">
          <h2>{selectedProduct.name}</h2>
          <p className="price">
            ₹{selectedProduct.price}{" "}
            <span className="old-price">{selectedProduct.oldPrice}</span>{" "}
            <span className="discount">{selectedProduct.discount}</span>
          </p>

          {/* Sizes */}
          <div className="size-options">
            <h4>Size:</h4>
            <div className="sizes">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity">
            <h4>Quantity:</h4>
            <div>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="detail-actions">
            <button className="btn-wishlist">♡ Add to Wishlist</button>
            <button onClick={handleAddToCart} className="btn-add-cart">
              Add to Cart
            </button>
            <button className="btn-buy">Buy Now</button>
          </div>
             {showPopup && (
            <div className="popup-message">
              ✅ Item added to cart!
            </div>
          )}
          {/* ✅ Extra Information */}
          <div className="extra-info">
            <h4>Product Details</h4>
            <ul>
              <li>✅ Free Delivery on all orders</li>
              <li>✅ 14 Days Return / Replacement Policy</li>
              <li>✅ Material: Polyester & Cotton Blend</li>
              <li>✅ Care Instructions: Machine Wash Cold</li>
              <li>✅ Perfect for Sports & Casual Wear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracksuits;
