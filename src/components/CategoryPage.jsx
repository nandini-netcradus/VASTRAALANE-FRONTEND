
import React, { useState } from "react";
import "../scss/_CategoryPage.scss";
import { Link } from "react-router-dom";

// 🔽 Product images
import ShoesImg from "../assets/Adidass Fear Of God Athletic 1 Indiana.png";
import SandalImg from "../assets/Alexander_Mcqueen_Alex_Leather_For_Women_With_OG_Box_&_Carry_Bag_Black_1892 - Copy (3).png";
import PerfumeImg from "../assets/AZZARO WANTED TONIC EDT - Copy (3).png";
import TshirtImg from "../assets/Balmai n Paris Logo Imported Black Collar Neck Premium T-shirt F2831-BL - Copy (2).png";
import crocImg from "../assets/Croc s literide Black White - Copy.png";
import HandbagImg from "../assets/Bags.jpg";
import Sunglasses from "../assets/_David_becham_70066.png";

// 🔽 Categories
const categories = [
  "Shirts & Tshirt",
  "Loafers",
  "Shoes",
  "Luxury Watch",
  "Jeans & Trouser & Trackpant",
  "HandBags and Bag",
  "Perfumes",
  "Sunglasses",
  "Cordset & Tracksuit",
  "Girls Sandals and jutti"
];

// 🔽 Products
const products = [
  { id: 1, name: "Tommy_Hilfiger_T-shirt", category: "Shirts & Tshirt", oldPrice: 130, currentPrice: 117, image: TshirtImg },
  { id: 2, name: "AZZARO WANTED TONIC EDT", category: "Perfumes", oldPrice: 230, currentPrice: 217, image: PerfumeImg },
  { id: 3, name: "High Heel and Sandals", category: "Shoes", oldPrice: 130, currentPrice: 117, image: SandalImg },
  { id: 4, name: "nigel sylvester x air jordan 4 retro", category: "Shoes", oldPrice: 130, currentPrice: 117, image: ShoesImg },
  { id: 5, name: "COAC_H sling bag with folding box 201", category: "Loafers", oldPrice: 130, currentPrice: 117, image: crocImg },
  { id: 6, name: "COAC_H sling bag with folding box 201", category: "HandBags and Bag", oldPrice: 130, currentPrice: 117, image: HandbagImg },
  { id: 7, name: "David_becham_70066.png", category: "Sunglasses", oldPrice: 130, currentPrice: 117, image: Sunglasses },
];

const CategoryPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleProductClick = (prod) => setSelectedProduct(prod);
  const handleBack = () => setSelectedProduct(null);

  const relatedProducts = selectedProduct
    ? products.filter((p) => p.id !== selectedProduct.id)
    : [];

  const displayedProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="category-page">
      {/* Sidebar */}
      <aside className="category-sidebar">
        <h3>Category</h3>
        <ul>
          {categories.map((cat, index) => {
            if (cat === "Shirts & Tshirt") {
              return (
                <li key={index}>
                  <Link
                    to="/shirts"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
            } else if (cat === "Loafers") {
              return (
                <li key={index}>
                  <Link
                    to="/loafers-page"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
            } else if (cat === "Shoes") {
              return (
                <li key={index}>
                  <Link
                    to="/shoes-page"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
              } else if (cat === "Jeans & Trouser & Trackpant") {
              return (
                <li key={index}>
                  <Link
                    to="/jeans-page"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
              } else if (cat === "HandBags and Bag") {
              return (
                <li key={index}>
                  <Link
                    to="/handbag-page"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
            } else if (cat === "Luxury Watch") {
              return (
                <li key={index}>
                  <Link
                    to="/Luxury-page" 
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
              } else if (cat === "Perfumes") {
              return (
                <li key={index}>
                  <Link
                    to="/Perfume-page" 
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );

              } else if (cat === "Cordset & Tracksuit") {
              return (
                <li key={index}>
                  <Link
                    to="/Cordset-page" 
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
               } else if (cat === "Girls Sandals and jutti") {
              return (
                <li key={index}>
                  <Link
                    to="/Sandals-page" 
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );


              } else if (cat === "Sunglasses") {
              return (
                <li key={index}>
                  <Link
                    to="/Sunglasse-page" 
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              );
              
            } else {
              return (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    cursor: "pointer",
                    fontWeight: selectedCategory === cat ? "bold" : "normal",
                  }}
                >
                  {cat}
                </li>
              );
            }
          })}

          {/* Reset category */}
          <li
            onClick={() => setSelectedCategory(null)}
            style={{
              cursor: "pointer",
              fontWeight: selectedCategory === null ? "bold" : "normal",
              marginTop: "10px",
            }}
          >
            All Products
          </li>
        </ul>
      </aside>

      {/* Products Section */}
      <main className="products-section">
        {!selectedProduct ? (
          <>
            {/* Products Grid */}
            <div className="products-grid">
              {displayedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="product-card"
                  onClick={() => handleProductClick(prod)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="product-image">
                    <img src={prod.image} alt={prod.name} />
                  </div>
                  <div className="product-info">
                    <h4>{prod.name}</h4>
                    <p className="old-price">₹{prod.oldPrice}</p>
                    <p className="current-price">₹{prod.currentPrice}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Boxes */}
            <div className="info-container">
              <div className="info-item">
                <h4>Latest Styles</h4>
                <p>
                  Our designs follow the latest fashion styles to help you stay
                  updated with new trends.
                </p>
                <button>Read More</button>
              </div>
              <div className="info-item">
                <h4>Best Prices</h4>
                <p>We ensure premium quality at the most affordable rates.</p>
                <button>Read More</button>
              </div>
              <div className="info-item">
                <h4>Free Shipping</h4>
                <p>
                  Enjoy free delivery on all products, hassle-free shopping
                  guaranteed.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </>
        ) : (
          // Product Details
          <div className="product-details-page">
            <button className="back-btn" onClick={handleBack}>
              &larr; Back
            </button>
            <div className="main-product">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <h2>{selectedProduct.name}</h2>
              <p className="old-price">${selectedProduct.oldPrice}</p>
              <p className="current-price">${selectedProduct.currentPrice}</p>

              {/* Action Buttons */}
              <div className="product-action-buttons">
                <button className="buy-btn">Buy Now</button>
                <button className="cart-btn">Add to Cart</button>
                <button className="wishlist-btn">Wishlist</button>
              </div>
            </div>

            {relatedProducts.length > 0 && (
              <>
                <h3>Related Products</h3>
                <div className="related-products-grid">
                  {relatedProducts.map((p) => (
                    <div
                      key={p.id}
                      className="related-product-card"
                      onClick={() => handleProductClick(p)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={p.image} alt={p.name} />
                      <h4>{p.name}</h4>
                      <p className="current-price">${p.currentPrice}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
