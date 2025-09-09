import React, { useState } from "react";
import "../scss/_HandbagPage.scss";


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
  { id: 1, name: "Burberry Leather Tote (Black)", price: "₹42,000", oldPrice: "₹50,000", discount: "16% off", image: BurberryBlack },
  { id: 2, name: "Burberry Leather Tote (Brown)", price: "₹41,500", oldPrice: "₹48,000", discount: "14% off", image: BurberryBrown },
  { id: 3, name: "Coach Sling Bag 198", price: "₹18,000", oldPrice: "₹22,000", discount: "18% off", image: Coach198 },
  { id: 4, name: "Coach Sling Bag 200", price: "₹18,500", oldPrice: "₹23,000", discount: "20% off", image: Coach200 },
  { id: 5, name: "Coach Sling Bag 201", price: "₹19,000", oldPrice: "₹23,500", discount: "19% off", image: Coach201 },
  { id: 6, name: "Coach Dempsey Tote Beige", price: "₹22,000", oldPrice: "₹26,000", discount: "15% off", image: CoachBeige },
  { id: 7, name: "Coach Dempsey Tote Blue", price: "₹22,500", oldPrice: "₹27,000", discount: "16% off", image: CoachBlue },
  { id: 8, name: "Trendy Girls Purse", price: "₹7,500", oldPrice: "₹9,000", discount: "17% off", image: GirlsPurse1 },
  { id: 9, name: "Gucci Dionysus Apricot Black", price: "₹55,000", oldPrice: "₹65,000", discount: "15% off", image: GucciApricotBlack },
  { id: 10, name: "Gucci Dionysus Apricot Brown", price: "₹56,000", oldPrice: "₹66,000", discount: "15% off", image: GucciApricotBrown },
  { id: 11, name: "Handbag Classic 78", price: "₹8,000", oldPrice: "₹9,500", discount: "16% off", image: Handbag78 },
  { id: 12, name: "Louis Vuitton Keepall Blue", price: "₹68,000", oldPrice: "₹80,000", discount: "15% off", image: LouisBlue },
  { id: 13, name: "Louis Vuitton Keepall Neon", price: "₹67,500", oldPrice: "₹79,000", discount: "15% off", image: LouisNeon },
  { id: 14, name: "Michael Kors Eliza Tote (45)", price: "₹25,000", oldPrice: "₹30,000", discount: "16% off", image: MKEliza45 },
  { id: 15, name: "Michael Kors Eliza Tote (546)", price: "₹26,000", oldPrice: "₹31,000", discount: "16% off", image: MKEliza546 },
  { id: 16, name: "Michael Kors Medium Backpack", price: "₹28,000", oldPrice: "₹33,000", discount: "15% off", image: MKBeigeBrown },
  { id: 17, name: "Michael Kors Parker Shoulder Bag", price: "₹30,000", oldPrice: "₹35,000", discount: "14% off", image: MKParker },
  { id: 18, name: "Michael Kors Sullivan Tote Beige", price: "₹27,500", oldPrice: "₹32,000", discount: "14% off", image: MKSullivanBeige },
  { id: 19, name: "Michael Kors Sullivan Tote Coffee", price: "₹27,000", oldPrice: "₹31,500", discount: "14% off", image: MKSullivanCoffee },
];



const HandbagPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

// ✅ Agar koi product select nahi hua toh Grid show hoga
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

  // ✅ Agar product select ho jaye toh Details page show hoga
  return (
    <div className="handbag-page">
      <div className="handbag-details">
        <button className="back-btn" onClick={() => setSelectedProduct(null)}>
          ← Back
        </button>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <h2>{selectedProduct.name}</h2>
        <p className="old-price">{selectedProduct.oldPrice}</p>
        <p className="current-price">{selectedProduct.price}</p>

        {/* ✅ Action Buttons */}
        <div className="product-action-buttons">
          <button className="buy-btn">Buy Now</button>
          <button className="cart-btn">Add to Cart</button>
          <button className="wishlist-btn">Wishlist</button>
        </div>

        {/* ✅ Related Products */}
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
    </div>
  );
};

export default HandbagPage;