
import React, { useState } from "react";
import "../scss/_loafers.scss";
import { useNavigate,useLocation} from "react-router-dom";
import { useCart } from "../context/CartContext";


// ✅ Imports (file names ko bilkul aapke diye huye exact names se hi rakha hai)
import Loafers1 from "../assets/Loro piana loaferrs.png";
import Loafers2 from "../assets/Loro piana loafers - Copy.png";
import Loafers3 from "../assets/Loro Piana Loafers 19051 Brown - Copy.jpg";
import Loafers4 from "../assets/Loro piana loafers.jpg";
import Loafers5 from "../assets/Loro piana loafers.png";
import Loafers6 from "../assets/Loro piana loafers1.png";
import Loafers7 from "../assets/Loro piana loafers2.png";
import Loafers8 from "../assets/Loro piana loafers3.png";
import Loafers9 from "../assets/Loro piana loafers4.jpg";
import Loafers10 from "../assets/Loro piana loaferss.jpg";
import Loafers11 from "../assets/Loro piana loafersss.jpg";
import Loafers12 from "../assets/Loro Piana_loafers.jpg";
import Loafers13 from "../assets/Loro Piano Loafers 19051 Beige - Copy.png";
import Loafers14 from "../assets/Loro Piano Loafers 19051 Blue - Copy.png";
import Loafers15 from "../assets/Loro Piano Loafers 19051 Green.png";
import Loafers16 from "../assets/Loro Piano Loafers 19051 Greyy - Copy.png";
import Loafers17 from "../assets/Loro Piano Loafers 19051 Greyy.png";
import Loafers18 from "../assets/Loro Piano Loafers 19051 Navy - Copy.png";
import Loafers19 from "../assets/LoroO piana loafers.png";

// ✅ Products array
const loafers = [
  { id: 1, name: "Loro Piana Loafers", price: "2799.00", image: Loafers1 },
  { id: 2, name: "Loro Piana Loafers", price: "2500", image: Loafers2 },
  { id: 3, name: "Loro Piana Loafers Brown", price: "3000", image: Loafers3 },
  { id: 4, name: "Loro Piana Loafers", price: "1500", image: Loafers4 },
  { id: 5, name: "Loro Piana Loafers", price: "2000", image: Loafers5 },
  { id: 6, name: "Loro Piana Loafers", price: "3000", image: Loafers6 },
  { id: 7, name: "Loro Piana Loafers", price: "2789.00", image: Loafers7 },
  { id: 8, name: "Loro Piana Loafers", price: "1299.00", image: Loafers8 },
  { id: 9, name: "Loro Piana Loafers", price: "2,000", image: Loafers9 },
  { id: 10, name: "Loro Piana Loafers", price: "2,000", image: Loafers10 },
  { id: 11, name: "Loro Piana Loafers", price: "3,500", image: Loafers11 },
  { id: 12, name: "Loro Piana Loafers", price: "1,000", image: Loafers12 },
  { id: 13, name: "Loro Piana Loafers Beige", price: "3,000", image: Loafers13 },
  { id: 14, name: "Loro Piana Loafers Blue", price: "2500", image: Loafers14 },
  { id: 15, name: "Loro Piana Loafers Green", price: "2,000", image: Loafers15 },
  { id: 16, name: "Loro Piana Loafers Grey", price: "1500", image: Loafers16 },
  { id: 17, name: "Loro Piana Loafers Grey", price: "1,500", image: Loafers17 },
  { id: 18, name: "Loro Piana Loafers Navy", price: "2,500", image: Loafers18 },
  { id: 19, name: "Loro Piana Loafers", price: "2,000", image: Loafers19 },
];

const Loafers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const [popup, setPopup] = useState("");

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 2000);
  };

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product, related: loafers } });
  };

  const handleAddToCart = (product) => {
    console.log(`✅ Add to Cart clicked for: ${product.name}`); // 🔹 Console log
    addToCart(product); // 🔹 Add to cart logic
    showPopup(`${product.name} added to cart!`); // 🔹 Popup message
  };

  // Check if user came via detail page navigation
  const selectedProduct = location.state?.product;

  return (
    <div className="loafers-container">
      <h2 className="section-title">Luxury Loafers Collection</h2>

      {!selectedProduct ? (
        // 🔹 Grid view (no Add to Cart here)
        <div className="loafers-grid">
          {loafers.map((product) => (
            <div
              key={product.id}
              className="loafers-card"
              onClick={() => handleClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="loafers-image"
              />
              <h3 className="loafers-name">{product.name}</h3>
              <p className="loafers-price">
                {product.price} <span className="old-price">{product.oldPrice}</span>
              </p>
              <p className="discount">{product.discount}</p>
            </div>
          ))}
        </div>
      ) : (
        // 🔹 Detail view (Add to Cart button here)
        <div className="product-detail">
          <div className="detail-main">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="detail-image" />

            <div className="detail-info">
              <h2>{selectedProduct.name}</h2>
              <p className="loafers-price">
                {selectedProduct.price} <span className="old-price">{selectedProduct.oldPrice}</span>
              </p>
              <p className="discount">{selectedProduct.discount}</p>

              <div className="product-actions">
                <button
                  className="btn-cart"
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
                <button className="btn-buy">Buy Now</button>
              </div>
            </div>
          </div>

          {/* 🔹 Popup message */}
          {popup && <div className="popup">{popup}</div>}
        </div>
      )}
    </div>
  );
};

export default Loafers;