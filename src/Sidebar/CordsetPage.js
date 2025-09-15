import React, { useState } from "react";
import "../scss/_cordsetPage.scss";

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
  { id: 1, name: "Adidas Red Logo Print Premium Imported Tracksuit", price: 15000, oldPrice: 16000, discount: "6% off", image: AdidasRedLogo },
  { id: 2, name: "Air Jordan Black Premium Oversized Cord Set", price: 18000, oldPrice: 20000, discount: "10% off", image: AirJordanBlack },
  { id: 3, name: "Air Jordan Cream Premium Oversized Cord Set", price: 18000, oldPrice: 20000, discount: "10% off", image: AirJordanCream },
  { id: 4, name: "Air Jordan Navy Blue Premium Oversized Cord Set", price: 18000, oldPrice: 20000, discount: "10% off", image: AirJordanNavy },
  { id: 5, name: "Armani Exchange White Embroidered Patch Logo Eagle Edition Imported Fabric Tracksuit", price: 22000, oldPrice: 24000, discount: "8% off", image: ArmaniExchangeWhite },
  // { id: 6, name: "Asics Gel Kayano 31 Rich Navy Spicy", price: 14000, oldPrice: 15000, discount: "6% off", image: AsicsGel },
  { id: 7, name: "Balmain Paris Black Premium Imported Japanese Fabric Monogram Printed Tracksuit", price: 25000, oldPrice: 27000, discount: "7% off", image: BalmainBlack },
  { id: 8, name: "Balmain Paris Navy Premium Imported Japanese Fabric Monogram Printed Tracksuit", price: 25000, oldPrice: 27000, discount: "7% off", image: BalmainNavy },
  { id: 9, name: "Balmain Paris White Premium Imported Japanese Fabric Monogram Printed Tracksuit", price: 25000, oldPrice: 27000, discount: "7% off", image: BalmainWhite },
  { id: 10, name: "Boss Dark Grey Embroidered Logo Design with Jacquard Fabric Premium Tracksuit", price: 18000, oldPrice: 20000, discount: "10% off", image: BossDarkGrey },
  { id: 11, name: "Burberry White Embroidered Logo Imported Fabric Tracksuit", price: 22000, oldPrice: 24000, discount: "8% off", image: BurberryWhite },
  { id: 12, name: "Diesel Beige Back Print Premium Oversized Cord Set", price: 17000, oldPrice: 18000, discount: "6% off", image: DieselBeige },
  { id: 13, name: "Diesel Cream Back Print Premium Oversized Cord Set", price: 17000, oldPrice: 18000, discount: "6% off", image: DieselCream },
  { id: 14, name: "Diesel Green Back Print Premium Oversized Cord Set", price: 17000, oldPrice: 18000, discount: "6% off", image: DieselGreen },
  // { id: 15, name: "Gucci GG Monogram Canvas Leather Espadrilles Khakhi", price: 30000, oldPrice: 32000, discount: "6% off", image: GucciKhakhi },
  { id: 16, name: "HoodRich Grey Embroidery Logo Imported Tracksuit", price: 16000, oldPrice: 17000, discount: "6% off", image: HoodRichGrey },
  { id: 17, name: "Louis Vuitton Black Beige Monogram Imported Premium Tracksuit", price: 40000, oldPrice: 42000, discount: "5% off", image: LouisVuittonBlackBeige },
  { id: 18, name: "Louis Vuitton Black White Monogram Imported Premium Tracksuit", price: 40000, oldPrice: 42000, discount: "5% off", image: LouisVuittonBlackWhite },
  { id: 19, name: "Louis Vuitton White Monogram Imported Premium Tracksuit", price: 40000, oldPrice: 42000, discount: "5% off", image: LouisVuittonWhite },
  { id: 20, name: "Zara Black Premium Knitted Classic Cord Set", price: 14000, oldPrice: 15000, discount: "6% off", image: ZaraBlack },
];

const Tracksuits = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity">
            <h4>Quantity:</h4>
            <div>
              <button>-</button>
              <input type="number" value={1} readOnly />
              <button>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="detail-actions">
            <button className="btn-wishlist">♡ Add to Wishlist</button>
            <button className="btn-cart">Add to Cart</button>
            <button className="btn-buy">Buy Now</button>
          </div>

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

      {/* ✅ Related Items Section */}
      {/* <div className="related-items">
        <h3>Related Tracksuits</h3>
        <div className="related-grid">
          {tracksuits
            .filter((item) => item.id !== selectedProduct.id)
            .slice(0, 5)
            .map((item) => (
              <div
                key={item.id}
                className="related-card"
                onClick={() => setSelectedProduct(item)}
              >
                <img src={item.image} alt={item.name} />
                <p className="name">{item.name}</p>
                <p className="price">₹{item.price}</p>
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default Tracksuits;
