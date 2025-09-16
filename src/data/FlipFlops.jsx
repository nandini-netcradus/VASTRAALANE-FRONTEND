import React, { useState } from "react";
import "../scss/_flipflops.scss";
import { useCart } from "../context/CartContext";

// ✅ Flipflops Data
import FlipFlop1 from "../assets/Adiddas Yeezy Slides Bone Ua.png";
import FlipFlop2 from "../assets/Adiddas Yeezy Slides flax Uaa - Copy (2).png";
import FlipFlop3 from "../assets/air max 1 flip flop grey green - Copy (2).png";
import FlipFlop4 from "../assets/Dior_Riviera_Dway_Platform_Raffia_Slides_For_Women_With_OG_Box_And_Carry_Bag_Grey_5099-10 - Copy (2).png";
import FlipFlop5 from "../assets/fat tires slide sale.png";
import FlipFlop6 from "../assets/GUCCI_GG.jpg";

const flipflops = [
  { id: 1, name: "Adidas Yeezy Slides Bone", price: 1500, image: FlipFlop1 },
  { id: 2, name: "Adidas Yeezy Slides Flax", price: 1600, image: FlipFlop2 },
  { id: 3, name: "Nike Air Max Flip Flop Grey Green", price: 2000, image: FlipFlop3 },
  { id: 4, name: "Dior Riviera Dway Platform Slides", price: 2799.0, image: FlipFlop4 },
  { id: 5, name: "Fat Tires Slide", price: 1200, image: FlipFlop5 },
  { id: 6, name: "Gucci GG Slides", price: 1500, image: FlipFlop6 },
];

function Flipflops() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart, addToWishlist } = useCart();
  const [popup, setPopup] = useState("");

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 2000);
  };

  // ✅ Add to Wishlist handler
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    showPopup(`${product.name} added to Wishlist!`);
  };

  // ✅ Product List Page
  if (!selectedProduct) {
    return (
      <div className="flipflops-container">
        <h2 className="flipflops-title">Flipflops Collection</h2>
        <div className="flipflops-grid">
          {flipflops.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => setSelectedProduct(item)}
            >
              <img src={item.image} alt={item.name} />
              <p className="product-name">{item.name}</p>
              <p className="price">₹{item.price}</p>
            </div>
          ))}
        </div>
        {popup && <div className="popup">{popup}</div>}
      </div>
    );
  }

  // ✅ Product Detail Page
  return (
    <div className="product-detail">
      <div className="detail-content">
        <div className="detail-left">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
        <div className="detail-right">
          <h2>{selectedProduct.name}</h2>
          <p className="price">₹{selectedProduct.price}</p>

          <div className="size-options">
            <h4>Size:</h4>
            <div className="sizes">
              <button>UK 6/EURO 40</button>
              <button>UK 7/EURO 41</button>
              <button>UK 8/EURO 42</button>
              <button>UK 9/EURO 43</button>
            </div>
          </div>

          <div className="quantity">
            <h4>Quantity:</h4>
            <div>
              <button>-</button>
              <input type="number" value={1} readOnly />
              <button>+</button>
            </div>
          </div>

          <div className="detail-actions">
            <button
              className="btn-wishlist"
              onClick={() => handleAddToWishlist(selectedProduct)}
            >
              ♡ Add to Wishlist
            </button>
            <button
              className="btn-cart"
              onClick={() => addToCart(selectedProduct)}
            >
              Add to Cart
            </button>
            <button className="btn-buy">Buy Now</button>
          </div>

          {popup && <div className="popup">{popup}</div>}
        </div>
      </div>
    </div>
  );
}

export default Flipflops;
