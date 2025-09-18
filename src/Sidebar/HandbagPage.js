import React, { useState } from "react";
import "../scss/_HandbagPage.scss";
import { useCart } from "../context/CartContext";


// ✅ Import all handbag images
import BurberryBlack from "../assets/Burberr_y Tb Smooth Leather Tote Bag With Dust Bag (Black).png";
import BurberryBrown from "../assets/Burberr_y Tb Smooth Leather Tote Bag With Dust Bag (Brown).png";
import Coach198 from "../assets/COAC_H sling bag with folding box 198.png";
import Coach200 from "../assets/COAC_H sling bag with folding box 200.png";
import Coach201 from "../assets/COAC_H sling bag with folding box 201.png";
import CoachBeige from "../assets/Coach_Dempsey_Tote_22_In_Signature_Jacquard_With_Stripe_And_Coach_Patch_With_OG_Box_&_Dust_Bag_(Beige-5638) - Copy (2).png";
import CoachBlue from "../assets/Coach_Dempsey_Tote_22_In_Signature_Jacquard_With_Stripe_And_Coach_Patch_With_OG_Box_&_Dust_Bag_(Blue-5638)) - Copy (2).png";
import GirlsPurse1 from "../assets/girlspurse1.jpg";
import GucciApricotBlack from "../assets/Gucci_GG_Supreme_Medium_Dionysus_Bag_In_Apricot_Black_With_OG_Box_&_Dust_Bag_50247_Apricot_Black - Copy (2).png";
import GucciApricotBrown from "../assets/Gucci_GG_Supreme_Medium_Dionysus_Bag_In_Apricot_Brown_With_OG_Box_&_Dust_Bag_50247_Apricot_Brown - Copy.png";
import Handbag78 from "../assets/HANDBAG78 - Copy.jpg";
import LouisBlue from "../assets/Louis_Vuitton_Keepall_Bandouliere_50_Blue_Transparent_Travel_Duffle_Bag_With_Dust_Bag_(L-810).png";
import LouisNeon from "../assets/Louis_Vuitton_Keepall_Bandouliere_50_Neon_Transparent_Travel_Duffle_Bag_With_Dust_Bag_(L-810).png";
import MKEliza45 from "../assets/Michael_kors eliza small tote with carry bag 45.png";
import MKEliza546 from "../assets/Michael_kors eliza small tote with carry bag 546.png";
import MKBeigeBrown from "../assets/Michael_Kors_MK_Medium_Backpack_Beige_Brown_With_Dust_Bag_21050_Beige_Brown - Copy.jpg";
import MKParker from "../assets/Michael_Kors_Parker_Medium_Logo_Shoulder_Bag_With_Dust_Bag_&_OG_Box_22319_Beige_Brown.png";
import MKSullivanBeige from "../assets/Micheal_Kors_MK_Sullivan_Zipper_Tote_Bag_Beige_Brown_With_Dustbag_3910_Beige_Brown.jpg";
import MKSullivanCoffee from "../assets/Micheal_Kors_MK_Sullivan_Zipper_Tote_Bag_Coffee_Brown_With_Dustbag_3910_Coffee_Brown - Copy.jpg";

// ✅ Products array
const handbags = [
  { id: 1, name: "Burberry Leather Tote (Black)", price: "₹3999", oldPrice: "₹6999", discount: "16% off", image: BurberryBlack },
  { id: 2, name: "Burberry Leather Tote (Brown)", price: "₹4,500", oldPrice: "₹8,000", discount: "14% off", image: BurberryBrown },
  { id: 3, name: "Coach Sling Bag 198", price: "₹3500.00", oldPrice: "₹34000", discount: "18% off", image: Coach198 },
  { id: 4, name: "Coach Sling Bag 200", price: "₹3500.00", oldPrice: "₹3899.00", discount: "20% off", image: Coach200 },
  { id: 5, name: "Coach Sling Bag 201", price: "₹3199.00", oldPrice: "₹55,500", discount: "19% off", image: Coach201 },
  { id: 6, name: "Coach Dempsey Tote Beige", price: "₹2200", oldPrice: "₹45,00", discount: "15% off", image: CoachBeige },
  { id: 7, name: "Coach Dempsey Tote Blue", price: "₹2100", oldPrice: "₹3,000", discount: "16% off", image: CoachBlue },
  { id: 8, name: "Trendy Girls Purse", price: "₹2791.00", oldPrice: "₹3,000", discount: "17% off", image: GirlsPurse1 },
  { id: 9, name: "Gucci Dionysus Apricot Black", price: "₹5500", oldPrice: "₹6500", discount: "15% off", image: GucciApricotBlack },
  { id: 10, name: "Gucci Dionysus Apricot Brown", price: "₹5600", oldPrice: "₹6600", discount: "15% off", image: GucciApricotBrown },
  { id: 11, name: "Handbag Classic 78", price: "₹6000", oldPrice: "₹8500", discount: "16% off", image: Handbag78 },
  { id: 12, name: "Louis Vuitton Keepall Blue", price: "₹2000", oldPrice: "₹8000", discount: "15% off", image: LouisBlue },
  { id: 13, name: "Louis Vuitton Keepall Neon", price: "₹2500", oldPrice: "₹7000", discount: "15% off", image: LouisNeon },
  { id: 14, name: "Michael Kors Eliza Tote (45)", price: "₹2500", oldPrice: "₹3000", discount: "16% off", image: MKEliza45 },
  { id: 15, name: "Michael Kors Eliza Tote (546)", price: "₹2600", oldPrice: "₹3100", discount: "16% off", image: MKEliza546 },
  { id: 16, name: "Michael Kors Medium Backpack", price: "₹2800", oldPrice: "₹3300", discount: "15% off", image: MKBeigeBrown },
  { id: 17, name: "Michael Kors Parker Shoulder Bag", price: "₹32900", oldPrice: "₹3500", discount: "14% off", image: MKParker },
  { id: 18, name: "Michael Kors Sullivan Tote Beige", price: "₹2700", oldPrice: "₹3200", discount: "14% off", image: MKSullivanBeige },
  { id: 19, name: "Michael Kors Sullivan Tote Coffee", price: "₹2799.0", oldPrice: "₹3100", discount: "14% off", image: MKSullivanCoffee },
];

const HandbagPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart, addToWishlist, wishlist } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const getNumericPrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.toString().replace(/[^0-9.]/g, ""));
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: getNumericPrice(selectedProduct.price),
      quantity: 1,
      image: selectedProduct.image,
    };

    addToCart(cartItem);
    console.log("Added to cart:", cartItem);

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  if (!selectedProduct) {
    return (
      <div className="handbag-page">
        <h2 className="page-title">Handbag Collection</h2>
        <div className="handbag-grid">
          {handbags.map((bag) => (
            <div
              key={bag.id}
              className="handbag-card"
              onClick={() => setSelectedProduct(bag)}
            >
              <img src={bag.image} alt={bag.name} />
              <h4>{bag.name}</h4>
              <p className="old-price">{bag.oldPrice}</p>
              <p className="current-price">{bag.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="handbag-page">
      <div className="handbag-details">
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <h2>{selectedProduct.name}</h2>
        <p className="old-price">{selectedProduct.oldPrice}</p>
        <p className="current-price">{selectedProduct.price}</p>

        {/* 🔹 Action Buttons */}
        <div className="product-action-buttons">
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button
            className="wishlist-btn"
            onClick={() => addToWishlist(selectedProduct)}
          >
            {wishlist.some((w) => w.id === selectedProduct.id)
              ? "Remove from Wishlist"
              : "♡ Wishlist"}
          </button>

          <button className="buy-btn">Buy Now</button>
        </div>

        {/* 🔹 Related Products */}
        <h3 style={{ marginTop: "30px" }}>Related Products</h3>
        <div className="related-grid">
          {handbags
            .filter((bag) => bag.id !== selectedProduct.id)
            .map((bag) => (
              <div
                key={bag.id}
                className="related-card"
                onClick={() => setSelectedProduct(bag)}
              >
                <img src={bag.image} alt={bag.name} />
                <h4>{bag.name}</h4>
                <p className="current-price">{bag.price}</p>
              </div>
            ))}
        </div>
      </div>

      {/* 🔹 Popup Message */}
      {showPopup && (
        <div className="popup-message">
          ✅ {selectedProduct.name} added to cart!
        </div>
      )}
    </div>
  );
};

export default HandbagPage;