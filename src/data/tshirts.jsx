import React, { useState } from "react";
import "../scss/_tshirts.scss";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

// 🔽 Images import
import VersaceBlue from "../assets/Versace Couture Petrol Blue Back Print Imported Polo T-Shirtt.png";
import VersaceOlive from "../assets/Versace Couture Olive Back Print Imported Pol0o T-Shirt.png";
import Tshirt2 from "../assets/tshirt2.jpg";
import Tshirt1 from "../assets/tshirt.jpg";
import TommyTeal from "../assets/Tommy_Hilfiger Teal Polo.jpg";
import TommyOffwhite from "../assets/Tommy_Hilfiger Off-white.jpg";
import TommyNavy from "../assets/Tommy_Hilfiger Navy Polo.jpg";
import TommyWhite from "../assets/Tommy Hilfige r Premium 220gsm Interlock Cotton Lycra Round Neck Tshirt White 2081.jpg";
import TommyBlack from "../assets/Tommy Hilfige r Black Premium Polo Tshirt With 240 Gsm Interlock Cotton Lycra Fabric With Collar Design Sleeve Logo 2569.png";
import RalphPink from "../assets/Ralph_Lauren Polo Pink Oxford Lycra Embroidery Logo Premium Shirt F2757-PI - Copy.png";
import RalphMustard from "../assets/Ralph_Lauren Polo Mustard Oxford Lycra Embroidery Logo Premium Shirt F2757-MU.png";
import RalphBlack from "../assets/Ralph_Lauren Polo Black Oxford Lycra Embroidery Logo Premium Shirt F2757-BL.png";
import RalphWine from "../assets/Ralph Lauren Cotton Wine Premium Shirt.png";
import RalphWhite from "../assets/Ralph Lauren Cotton White Premium Shirt.png";
import RalphMilange from "../assets/Ralph Lauren Cotton Milange Premium Shirt.png";
import RalphCottonBlack from "../assets/Ralph Lauren Cotton Black Premium Shirt.png";
import LacosteWhite1 from "../assets/Lacost e White Premium Cotton Lycra Pique fabric Polo Tshirt with Sleeves 2836.png";
import LacosteWhite2 from "../assets/Lacost e White Premium Cotton Lycra Pique fabric Polo Tshirt with Shoulder Strip Design and Embroidered Logo 2843.png";
import LacosteSky from "../assets/Lacost e Sky Premium Polo T shirt With 240 gsm interlock cotton lycra fabric and Collar Design with Embroidered Logo 2551 - Copy (2).jpg";
import LacosteOffwhite from "../assets/Lacost e Offwhite Premium Cotton Lycra Pique fabric Polo Tshirt with Front Printed Design and Embroidered Logo Zip Style 2841.jpg";
import LacosteNavy from "../assets/Lacost e Navy Premium Cotton Lycra Pique fabric Polo Tshirt with Collar Design and Embroidered Logo Pocket Style 2840 - Copy (2).png";
import LacosteMaroon from "../assets/Lacost e Maroon Premium Polo T shirt With 240 gsm interlock cotton lycra fabric and Collar Design with Embroidered Logo 2555.png";
import LacosteBlack from "../assets/Lacost e Black Premium Cotton Lycra Pique fabric Polo Tshirt with Sleeves Design and Embroidered Logo 2838 - Copy.png";
import LacosteBeige from "../assets/Lacost e Beige Premium Cotton Lycra Pique fabric Polo Tshirt with Collar Design and Embroidered Logo Pocket Style 2839 - Copy (2).png";
import GucciWhite from "../assets/Gucc i White Premium Round Neck Printed T-shirt F2666-WH1.png";
import GucciWhiteShirt from "../assets/Gucc i Monogram Premium White Shirt With Brand Box Packing and carry bag F2718-WH - Copy.jpg";
import GucciBlackShirt1 from "../assets/Gucc i Monogram Premium Black Shirt With Brand Box_Packing and carry bag F2718-BL - Copy (2).png";
import GucciBlackTshirt from "../assets/Gucc i Black Premium Round Neck Printed T-shirt F2666-BL2.png";
import GucciBeigeTshirt from "../assets/Gucc i Beige Premium Round Neck Printed T-shirt F2666-BE2.png";
import DolceWhite from "../assets/Dolce&Gabbana White Reflective Logo Shirt With Premium Box Packing.png";
import DolceBlack1 from "../assets/Dolce&Gabbana Black Reflective Logo Shirt With Premium Box Packing - Copy.png";
import DiorWhite from "../assets/Christian Dio r White Premium Imported Japanese Fabric Printed Tracksuit with Brand Box and Carry Bag 2639 - Copy.png";

// 🔽 Products array
const tshirts = [
  { id: 1, name: "Versace Couture Petrol Blue Back Print Imported Polo T-Shirt", price: "₹2,500", oldPrice: "₹3,000", discount: "17% off", image: VersaceBlue },
  { id: 2, name: "Versace Couture Olive Back Print Imported Polo T-Shirt", price: "₹2,600", oldPrice: "₹3,200", discount: "19% off", image: VersaceOlive },
  { id: 3, name: "Tommy Hilfiger T-Shirt 2", price: "₹1,200", oldPrice: "₹1,500", discount: "20% off", image: Tshirt2 },
  { id: 4, name: "Tommy Hilfiger T-Shirt 1", price: "₹1,300", oldPrice: "₹1,600", discount: "19% off", image: Tshirt1 },
  { id: 5, name: "Tommy Hilfiger Teal Polo", price: "₹3,000", oldPrice: "₹3,500", discount: "14% off", image: TommyTeal },
  { id: 6, name: "Tommy Hilfiger Off-white", price: "₹3,100", oldPrice: "₹3,600", discount: "14% off", image: TommyOffwhite },
  { id: 7, name: "Tommy Hilfiger Navy Polo", price: "₹3,200", oldPrice: "₹3,700", discount: "14% off", image: TommyNavy },
  { id: 8, name: "Tommy Hilfiger Premium White", price: "₹2,800", oldPrice: "₹3,200", discount: "13% off", image: TommyWhite },
  { id: 9, name: "Tommy Hilfiger Premium Black", price: "₹2,900", oldPrice: "₹3,300", discount: "12% off", image: TommyBlack },
  { id: 10, name: "Ralph Lauren Polo Pink Shirt", price: "₹3,400", oldPrice: "₹4,000", discount: "15% off", image: RalphPink },
  { id: 11, name: "Ralph Lauren Polo Mustard Shirt", price: "₹3,450", oldPrice: "₹4,100", discount: "16% off", image: RalphMustard },
  { id: 12, name: "Ralph Lauren Polo Black Shirt", price: "₹3,500", oldPrice: "₹4,200", discount: "17% off", image: RalphBlack },
  { id: 13, name: "Ralph Lauren Cotton Wine Shirt", price: "₹3,550", oldPrice: "₹4,300", discount: "17% off", image: RalphWine },
  { id: 14, name: "Ralph Lauren Cotton White Shirt", price: "₹3,600", oldPrice: "₹4,350", discount: "17% off", image: RalphWhite },
  { id: 15, name: "Ralph Lauren Cotton Milange Shirt", price: "₹3,650", oldPrice: "₹4,400", discount: "17% off", image: RalphMilange },
  { id: 16, name: "Ralph Lauren Cotton Black Shirt", price: "₹3,700", oldPrice: "₹4,450", discount: "17% off", image: RalphCottonBlack },
  { id: 17, name: "Lacoste White Premium Polo", price: "₹3,300", oldPrice: "₹4,000", discount: "18% off", image: LacosteWhite1 },
  { id: 18, name: "Lacoste White Shoulder Strip Polo", price: "₹3,350", oldPrice: "₹4,050", discount: "17% off", image: LacosteWhite2 },
  { id: 19, name: "Lacoste Sky Premium Polo", price: "₹3,400", oldPrice: "₹4,100", discount: "17% off", image: LacosteSky },
  { id: 20, name: "Lacoste Offwhite Premium Polo", price: "₹3,450", oldPrice: "₹4,150", discount: "17% off", image: LacosteOffwhite },
  { id: 21, name: "Lacoste Navy Premium Polo", price: "₹3,500", oldPrice: "₹4,200", discount: "17% off", image: LacosteNavy },
  { id: 22, name: "Lacoste Maroon Premium Polo", price: "₹3,550", oldPrice: "₹4,250", discount: "17% off", image: LacosteMaroon },
  { id: 23, name: "Lacoste Black Premium Polo", price: "₹3,600", oldPrice: "₹4,300", discount: "17% off", image: LacosteBlack },
  { id: 24, name: "Lacoste Beige Premium Polo", price: "₹3,650", oldPrice: "₹4,350", discount: "16% off", image: LacosteBeige },
  { id: 25, name: "Gucci White Premium T-Shirt", price: "₹4,000", oldPrice: "₹4,600", discount: "13% off", image: GucciWhite },
  { id: 26, name: "Gucci Monogram White Shirt", price: "₹4,200", oldPrice: "₹4,800", discount: "12% off", image: GucciWhiteShirt },
  { id: 27, name: "Gucci Monogram Black Shirt", price: "₹4,250", oldPrice: "₹4,900", discount: "13% off", image: GucciBlackShirt1 },
  { id: 28, name: "Gucci Black Premium T-Shirt", price: "₹4,350", oldPrice: "₹5,000", discount: "13% off", image: GucciBlackTshirt },
  { id: 29, name: "Gucci Beige Premium T-Shirt", price: "₹4,400", oldPrice: "₹5,050", discount: "13% off", image: GucciBeigeTshirt },
  { id: 30, name: "Dolce & Gabbana White Premium Shirt", price: "₹4,500", oldPrice: "₹5,200", discount: "13% off", image: DolceWhite },
  { id: 31, name: "Dolce & Gabbana Black Premium Shirt", price: "₹4,550", oldPrice: "₹5,250", discount: "13% off", image: DolceBlack1 },
  { id: 32, name: "Christian Dior White Premium Shirt", price: "₹4,700", oldPrice: "₹5,400", discount: "13% off", image: DiorWhite },
];


const Tshirts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const { addToCart, addToWishlist } = useCart();

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const cartItem = {
      ...selectedProduct,
      size: selectedSize,
      quantity,
    };
    addToCart(cartItem);
    alert("✅ Added to cart!");
  };

  const handleAddToWishlist = () => {
    if (!selectedProduct) return;
    addToWishlist(selectedProduct);
    alert("❤️ Added to wishlist!");
  };


  return (
    <div className="tshirts-page">
      <h2 className="page-title">Premium T-Shirts & Shirts</h2>

      {/* Product Grid View */}
      {!selectedProduct ? (
        <div className="tshirts-grid">
          {tshirts.map((item) => (
            <div
              key={item.id}
              className="tshirt-card"
              onClick={() => setSelectedProduct(item)}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">
                {item.price} <span className="old-price">{item.oldPrice}</span>
              </p>
              <p className="discount">{item.discount}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Product Detail */}
          <div className="product-detail">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="detail-image"
            />
            <div className="detail-info">
              <h2>{selectedProduct.name}</h2>
              <p className="price">
                {selectedProduct.price}{" "}
                <span className="old-price">{selectedProduct.oldPrice}</span>
              </p>
              <p className="discount">{selectedProduct.discount}</p>

              {/* ✅ Size Options */}
              <div className="size-options">
                <h4>Size:</h4>
                <div className="sizes">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
              </div>

              {/* ✅ Quantity */}
              <div className="quantity">
                <h4>Quantity:</h4>
                <div className="qty-box">
                  <button>-</button>
                  <input type="text" value="1" readOnly />
                  <button>+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                <button className="btn-cart" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btn-wishlist" onClick={handleAddToWishlist}>
                  Wishlist
                </button>
                <button className="btn-buy">Buy Now</button>
              </div>

              {/* ✅ Product Details List */}
              <div className="product-details">
                <h4>Product Details</h4>
                <ul>
                   <li><FaCheckCircle className="tick-icon" /> Free Delivery on all orders</li>
                    <li><FaCheckCircle className="tick-icon" /> 14 Days Return / Replacement Policy</li>
                    <li><FaCheckCircle className="tick-icon" /> Material: 100% Premium Cotton</li>
                    <li><FaCheckCircle className="tick-icon" /> Care Instructions: Machine Wash Cold</li>
                     <li><FaCheckCircle className="tick-icon" /> Perfect for Casual & Formal Wear</li>
                </ul>
              </div>

              {/* <button
                className="btn-back"
                onClick={() => setSelectedProduct(null)}
              >
                ← Back
              </button> */}
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products">
            <h3>Related Products</h3>
            <div className="related-grid">
              {tshirts
                .filter((item) => item.id !== selectedProduct.id)
                .slice(0, 4)
                .map((item) => (
                  <div
                    key={item.id}
                    className="related-card"
                    onClick={() => setSelectedProduct(item)}
                  >
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p className="price">
                      {item.price}{" "}
                      <span className="old-price">{item.oldPrice}</span>
                    </p>
                    <p className="discount">{item.discount}</p>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tshirts;



