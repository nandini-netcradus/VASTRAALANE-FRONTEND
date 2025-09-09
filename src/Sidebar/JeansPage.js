import React, { useState } from "react";
import "../scss/_JeansPage.scss";

// Images import
import AdidasBeige from "../assets/Adida s Beige Classic Embroidery Logo Premium Trackpant - Copy.png";
import AdidasBlack1 from "../assets/Adida s Black Classic Embroidery Logo Premium Trackpant - Copy (2).png";
import AdidasBlack2 from "../assets/Adida s Black Embroidery Logo Premium Trackpant - Copy (2).png";
import AdidasDarkGrey from "../assets/Adida s Dark Grey Embroidery Logo Premium Trackpant.png";
import AdidasLightGrey from "../assets/Adida s Light Grey Embroidery Logo Premium Trackpant.png";
import AdidasOlive from "../assets/Adida s Olive Embroidery Logo Premium Trackpant.png";
import AdidasPremium1 from "../assets/Adida s Premium Logo Designer Track Beige (312).png";
import AdidasPremium2 from "../assets/Adida s Premium Logo Designer Track Beige (3122).png";
import ArmaniBlack from "../assets/Arman i Exchange Black Logo Patch Imported Trackpant With Carry Bag.png";
import ArmaniGrey from "../assets/Arman i Exchange Grey Logo Patch Imported Trackpant With Carry Bagg - Copy (2).png";
import NikeBlack from "../assets/Nik e Black Embroidery Logo Premium Trackpant.png";
import ZaraBlack from "../assets/Zar a Black Stripes Premium Classic Linen Pant.png";
import ZaraCream from "../assets/Zar a Cream Stripes Premium Classic Linen Pant.png";
import ZaraGrey from "../assets/Zar a Grey Stripes Premium Classic Linen Pant.png";
// ✅ Import Images
import AmirGreenish from "../assets/Amir i Greenish 1 Embroidery Work Logo Imported Denim - Copy (2).png";
import AmirSkyBlue3 from "../assets/Amir i Sky Blue 2 Embroidery Logo Imported Denim - Copy (3).png";
import AmirSkyBlue from "../assets/Amir i Sky Blue 2 Embroidery Logo Imported Denim - Copy.png";
import AtomDarkBlue from "../assets/aTOMY-VS-JEANS-DARK-BLUE - Copy (3).png";
import LoeweDenim3 from "../assets/amLoewe Blue Embroidery Logo Imported Denim - Copy (3).png";
import LoeweDenim2 from "../assets/Loewe Blue Embroidery Logo Imported Denim - Copy.png";
import LoeweDenim1 from "../assets/Loewe Blue Embroidery Logo Imported Denim.png";
import TrueReligion1 from "../assets/True Religion Imported Blue Super Premium Denim With Brand Box Packing And Carry Bag F2881-BU.png";
import DGJeans1 from "../assets/D&G PREMIUM BLUE DENIM JEANS REGULAR FIT LENGHT 39.png";
import EmporioJeans1 from "../assets/EMPORIO ARMAN-I PREMIUM BLUE DENIM JEANS REGULAR FIT LENGHT 39.png";
import TommyHilfiger1 from "../assets/Tommy_Hilfiger Imported Black Super Premium Denim F2656-BL.png";
import GucciJeans1 from "../assets/GUCC-I PREMIUM BLUE DENIM JEANS STRAIGHT FIT LENGHT 41.png";
import DolceGabbana1 from "../assets/Dolce&Gabbana Blue Raw Wash Pocket Logo Imported Hyperflex Denim.png";
import TrueReligion2 from "../assets/True Religion Imported Sky Super Premium Denim With Brand Box Packing And Carry Bag F2692-SK.png";


const jeans = [
  { id: 1, name: "Adidas Beige Classic Embroidery Logo Premium Trackpant", image: AdidasBeige, price: "₹3,200", oldPrice: "₹12,500", discount: "74% off" },
  { id: 2, name: "Adidas Black Classic Embroidery Logo Premium Trackpant", image: AdidasBlack1, price: "₹3,000", oldPrice: "₹11,000", discount: "72% off" },
  { id: 3, name: "Adidas Black Embroidery Logo Premium Trackpant", image: AdidasBlack2, price: "₹2,900", oldPrice: "₹10,500", discount: "72% off" },
  { id: 4, name: "Adidas Dark Grey Embroidery Logo Premium Trackpant", image: AdidasDarkGrey, price: "₹3,100", oldPrice: "₹12,000", discount: "74% off" },
  { id: 5, name: "Adidas Light Grey Embroidery Logo Premium Trackpant", image: AdidasLightGrey, price: "₹2,800", oldPrice: "₹9,500", discount: "71% off" },
  { id: 6, name: "Adidas Olive Embroidery Logo Premium Trackpant", image: AdidasOlive, price: "₹3,300", oldPrice: "₹12,200", discount: "73% off" },
  { id: 7, name: "Adidas Premium Logo Designer Track Beige (312)", image: AdidasPremium1, price: "₹3,600", oldPrice: "₹13,000", discount: "72% off" },
  { id: 8, name: "Adidas Premium Logo Designer Track Beige (3122)", image: AdidasPremium2, price: "₹3,400", oldPrice: "₹12,500", discount: "72% off" },
  { id: 9, name: "Armani Exchange Black Logo Patch Imported Trackpant", image: ArmaniBlack, price: "₹4,200", oldPrice: "₹15,000", discount: "72% off" },
  { id: 10, name: "Armani Exchange Grey Logo Patch Imported Trackpant", image: ArmaniGrey, price: "₹4,000", oldPrice: "₹14,500", discount: "72% off" },
  { id: 11, name: "Nike Black Embroidery Logo Premium Trackpant", image: NikeBlack, price: "₹3,700", oldPrice: "₹13,000", discount: "72% off" },
  { id: 13, name: "Zara Black Stripes Premium Classic Linen Pant", image: ZaraBlack, price: "₹2,500", oldPrice: "₹9,000", discount: "72% off" },
  { id: 14, name: "Zara Cream Stripes Premium Classic Linen Pant", image: ZaraCream, price: "₹2,600", oldPrice: "₹9,200", discount: "72% off" },
  { id: 15, name: "Zara Grey Stripes Premium Classic Linen Pant", image: ZaraGrey, price: "₹2,700", oldPrice: "₹9,400", discount: "72% off" },
  { id: 16,name: "Amir i Greenish 1 Embroidery Work Logo Imported Denim",image: AmirGreenish,oldPrice: 220,Price: 180,},
  { id: 17,name: "Amir i Sky Blue 2 Embroidery Logo Imported Denim",image: AmirSkyBlue3,oldPrice: 210,Price: 170,},
  { id: 18,name: "Amir i Sky Blue 2 Embroidery Logo Imported Denim",image: AmirSkyBlue,oldPrice: 210,  Price: 175,},
  { id: 19,name: "aTOMY VS Jeans Dark Blue",image: AtomDarkBlue,oldPrice: 200,currentPrice: 160,},
  {
    id: 20,
    name: "Loewe Blue Embroidery Logo Imported Denim",
    image: LoeweDenim3,
    oldPrice: 230,
    Price: 185,
  },
  {
    id: 21,
    name: "Loewe Blue Embroidery Logo Imported Denim",
    image: LoeweDenim2,
    oldPrice: 230,
    Price: 180,
  },
  {
    id: 22,
    name: "Loewe Blue Embroidery Logo Imported Denim",
    image: LoeweDenim1,
    oldPrice: 230,
    Price: 178,
  },
{id:23,name:"True Religion Imported Blue Super Premium Denim With Brand Box Packing And Carry Bag F2881-BU",image:TrueReligion1,oldPrice:15999,price:9999,category:"Denim"},
  {id:24,name:"D&G PREMIUM BLUE DENIM JEANS REGULAR FIT LENGHT 39",image:DGJeans1,oldPrice:14999,price:8999,category:"Denim"},
  {id:25,name:"EMPORIO ARMAN-I PREMIUM BLUE DENIM JEANS REGULAR FIT LENGHT 39",image:EmporioJeans1,oldPrice:13999,price:8499,category:"Denim"},
  {id:26,name:"Tommy_Hilfiger Imported Black Super Premium Denim F2656-BL",image:TommyHilfiger1,oldPrice:12999,price:7999,category:"Denim"},
  {id:27,name:"GUCC-I PREMIUM BLUE DENIM JEANS STRAIGHT FIT LENGHT 41",image:GucciJeans1,oldPrice:15999,price:9999,category:"Denim"},
  {id:28,name:"Dolce&Gabbana Blue Raw Wash Pocket Logo Imported Hyperflex Denim",image:DolceGabbana1,oldPrice:16999,price:10999,category:"Denim"},
  {id:29,name:"True Religion Imported Sky Super Premium Denim With Brand Box Packing And Carry Bag F2692-SK",image:TrueReligion2,oldPrice:15999,price:9999,category:"Denim"}

];


const JeansPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (prod) => setSelectedProduct(prod);
  const handleBack = () => setSelectedProduct(null);

  const relatedProducts = selectedProduct
    ? jeans.filter((p) => p.id !== selectedProduct.id)
    : [];

  return (
    <div className="jeans-page">
      {!selectedProduct ? (
        <>
          <h2 className="page-title">Jeans, Trousers & Trackpants Collection</h2>
          <div className="jeans-grid">
            {jeans.map((prod) => (
              <div
                key={prod.id}
                className="jeans-card"
                onClick={() => handleProductClick(prod)}
              >
                <div className="jeans-image">
                  <img src={prod.image} alt={prod.name} />
                </div>
                <h4>{prod.name}</h4>
                <p className="old-price">₹{prod.oldPrice}</p>
                <p className="current-price">₹{prod.currentPrice}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="jeans-details">
          <button className="back-btn" onClick={handleBack}>
            &larr; Back
          </button>
          <div className="details-container">
            <div className="details-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="details-info">
              <h2>{selectedProduct.name}</h2>
              <p className="old-price">₹{selectedProduct.oldPrice}</p>
              <p className="current-price">₹{selectedProduct.currentPrice}</p>

              <div className="product-action-buttons">
                <button className="buy-btn">Buy Now</button>
                <button className="cart-btn">Add to Cart</button>
                <button className="wishlist-btn">Wishlist</button>
              </div>

              <div className="policy-box">
                <h3>Why Shop With Us?</h3>
                <ul>
                  <li>✔ 7 Days Easy Return Policy</li>
                  <li>✔ Free Shipping on All Orders</li>
                  <li>✔ Good Quality Material</li>
                  <li>✔ Secure Online Payments</li>
                  <li>✔ 24/7 Customer Support</li>
                </ul>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <>
              <h3>Related Products</h3>
              <div className="related-grid">
                {relatedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="related-card"
                    onClick={() => handleProductClick(p)}
                  >
                    <img src={p.image} alt={p.name} />
                    <h4>{p.name}</h4>
                    <p className="current-price">₹{p.currentPrice}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default JeansPage;