
import React, { useState } from "react";

import "../scss/_productDetail.scss";
import { useCart } from "../context/CartContext";

// Import all images
import CalvinKlein from "../assets/_Calvin_Klein_Gift_Set_4.png";
import DavidBeckham from "../assets/_David_becham_70066.png";
import DolceGabbana from "../assets/_Dolce_Gabbana_The__Only_One_Gift_Set_of_3.png";
import Gucci from "../assets/_Gucci_10318_.png";
import AdidasBeigeCopy2 from "../assets/Adida s Beige Classic Embroidery Logo Premium Trackpant - Copy.png";
import AdidasBeige from "../assets/Adida s Beige Classic Embroidery Logo Premium Trackpant - Copy.png";
import AdidasBlackCopy2 from "../assets/Adida s Black Classic Embroidery Logo Premium Trackpant - Copy (2).png";
import AdidasGrey from "../assets/Adida s Light Grey Embroidery Logo Premium Trackpant.png";
import AdidasOlive from "../assets/Adida s Olive Embroidery Logo Premium Trackpant.png";
import AdidasRed from "../assets/Adida s Red Logo Print Premium Imported Tracksuit.png";
import AdidasYeezyBoost350V2CarbonBeluga from "../assets/Adida_ss Yeezy Boost 350 V2 Carbon Beluga SEMI UA With All Accesories .png";
import ADIDAS from "../assets/ADIDAS.jpg";
import AdidasFearOfGodAthletic1 from "../assets/Adidass Fear Of God Athletic 1 Indiana.png";
import AdidasYeezySlidesBone from "../assets/Adiddas Yeezy Slides Bone Ua.png";
import AdidasFoamRunnerOnyx from "../assets/Aidddas Foam Runner Onyx Ua - Copy (3).png";
import AirJordanCordSet from "../assets/Air Jordan Cream Premium Oversized Cord Set - Copy (2).png";
import AlexanderMcQueenWhite from "../assets/ALEXANDER MCQUEEN PREMIUM WHITE SNEAKER.png";
import BalmainDenimShirt from "../assets/Balmai n Paris Logo Blue Super Premium Denim Shirt F2732-B33 - Copy (2).png";
import BirkenstockArizonaBlack from "../assets/BIRKENSTOCK ARIZONA EVA BLACK - Copy (2).png";
import DiorJAdiorSlingback from "../assets/Christian_Dior_JAdior_Slingback_Black_Dior_Embroidery_Flat_With_OG_Box_Dust_Bag_&_Carry_Bag_5108_Black - Copy.png";
import CoachCollinsEspadrille from "../assets/Coach_Collins_Espadrille_In_Signature_Denim_With_OG_Box_&_Carry_Bag_888-21_Denim - Copy.jpg";
import CrocsLiterideBlackWhite from "../assets/Croc s literide Black White - Copy.png";
import CoachDempseyToteBlue from "../assets/Coach_Dempsey_Tote_22_In_Signature_Jacquard_With_Stripe_And_Coach_Patch_With_OG_Box_&_Dust_Bag_(Blue-5638)) - Copy (2).png";
import CoachDempseyTotePink from "../assets/Coach_Dempsey_Tote_22_In_Signature_Jacquard_With_Stripe_And_Coach_Patch_With_OG_Box_&_Dust_Bag_(Pink-5638) - Copy.png";

export const products = [
  { name: "Calvin Klein Gift Set 4", image: CalvinKlein, category: "Gift Set", price: 2500 },
  { name: "David Beckham 70066", image: DavidBeckham, category: "Fragrance", price: 1800 },
  { name: "Dolce Gabbana The Only One Gift Set of 3", image: DolceGabbana, category: "Gift Set", price: 3000 },
  { name: "Gucci 10318", image: Gucci, category: "Accessory", price: 3500 },
  { name: "Adidas Beige Classic Embroidery Logo Premium Trackpant - Copy (2)", image: AdidasBeigeCopy2, category: "Trackpant", price: 2000 },
  { name: "Adidas Beige Classic Embroidery Logo Premium Trackpant", image: AdidasBeige, category: "Trackpant", price: 2000 },
  { name: "Adidas Black Classic Embroidery Logo Premium Trackpant - Copy (2)", image: AdidasBlackCopy2, category: "Trackpant", price: 2100 },
  { name: "Adidas Light Grey Embroidery Logo Premium Trackpant", image: AdidasGrey, category: "Trackpant", price: 2100 },
  { name: "Adidas Olive Embroidery Logo Premium Trackpant", image: AdidasOlive, category: "Trackpant", price: 2100 },
  { name: "Adidas Red Logo Print Premium Imported Tracksuit", image: AdidasRed, category: "Tracksuit", price: 4000 },
  { name: "Adidas Yeezy Boost 350 V2 Carbon Beluga SEMI UA With All Accessories", image: AdidasYeezyBoost350V2CarbonBeluga, category: "Shoes", price: 3500 },
  { name: "ADIDAS Premium Sneakers", image: ADIDAS, category: "Shoes", price: 3200 },
  { name: "Adidas Fear Of God Athletic 1 Indiana", image: AdidasFearOfGodAthletic1, category: "Shoes", price: 4000 },
  { name: "Adidas Yeezy Slides Bone UA", image: AdidasYeezySlidesBone, category: "Slides", price: 1500 },
  { name: "Adidas Foam Runner Onyx UA", image: AdidasFoamRunnerOnyx, category: "Shoes", price: 2000 },
  { name: "Air Jordan Cream Premium Oversized Cord Set", image: AirJordanCordSet, category: "Tracksuit", price: 4000 },
  { name: "Alexander McQueen Premium White Sneaker", image: AlexanderMcQueenWhite, category: "Shoes", price: 3800 },
  { name: "Balmain Paris Logo Blue Super Premium Denim Shirt", image: BalmainDenimShirt, category: "Shirts", price: 3000 },
  { name: "Birkenstock Arizona EVA Black", image: BirkenstockArizonaBlack, category: "Sandals", price: 1500 },
  { name: "Christian Dior JAdior Slingback Black With OG Box & Carry Bag", image: DiorJAdiorSlingback, category: "Shoes", price: 4500 },
  { name: "Coach Collins Espadrille In Signature Denim With OG Box & Carry Bag", image: CoachCollinsEspadrille, category: "Shoes", price: 3000 },
  { name: "Crocs Literide Black White", image: CrocsLiterideBlackWhite, category: "Sandals", price: 1200 },
  { name: "Coach Dempsey Tote 22 In Signature Jacquard With Stripe And Coach Patch (Blue)", image: CoachDempseyToteBlue, category: "Bags", price: 4500 },
  { name: "Coach Dempsey Tote 22 In Signature Jacquard With Stripe And Coach Patch (Pink)", image: CoachDempseyTotePink, category: "Bags", price: 3500 }

 ];

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(6);
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart } = useCart();


  const handleAddToCart = () => {
  if (!selectedProduct) return;

  const cartItem = {
    ...selectedProduct,
    size: selectedSize,
    quantity: Number(quantity),
    image: selectedProduct.image,
  };

  // ✅ Add to cart via context
  addToCart(cartItem);

  // ✅ Optional: 3 sec popup is already in CartContext
  console.log("Cart before add:", cart); // Debug: current cart items
  console.log("Added product:", cartItem); // Debug: added product
};

    
  return (
    <div className="product-section">
      <h2>Your City's Best Deals Handpicked for you</h2>

      {/* ✅ Product Grid */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">₹{product.price}</p>
          </div>
        ))}
      </div>

      {/* ✅ Product Detail Section */}
      {selectedProduct && (
        <div className="product-detail-expanded">
          {/* ✅ Left side – Image */}
          <div className="product-detail-left">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="product-image-large"
            />
          </div>

          {/* ✅ Right side – Details + Buttons */}
          <div className="product-detail-right">
            <h2 className="product-name">{selectedProduct.name}</h2>
            <p className="product-price">₹{selectedProduct.price}</p>
            <p className="product-shipping">Shipping calculated at checkout.</p>
             
              {/* Product Extra Details */}
              <div className="product-extra-details">
                <h3>Product Details</h3>
                <ul>
                  <li>✅ 100% Original & Premium Quality</li>
                  <li>✅ Free Shipping on orders above ₹999</li>
                  <li>✅ Easy 7-Day Return & Exchange Policy</li>
                  <li>✅ Cash on Delivery (COD) Available</li>
                  <li>✅ Secure Payment Options</li>
                  </ul>
                  </div>
            {/* ✅ Size Selector */}
            <div className="product-options">
              <label htmlFor="size">Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {[6, 7, 8, 9, 10, 11].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* ✅ Quantity Selector */}
            <div className="product-quantity">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            {/* ✅ Action Buttons */}
            <div className="product-actions">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn-buy-now">Buy Now</button>
              <button className="btn-wishlist">Add to Wishlist</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
