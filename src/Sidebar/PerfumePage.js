import React, { useState } from "react";
import "../scss/_PerfumePage.scss";


// 🔽 Import all perfume images
import AcquaDiGio from "../assets/_ACQUA_DI_GIO_GIORGIO_ARMAN_white.png";
import CalvinKlein from "../assets/_Calvin_Klein_Gift_Set_4.png";
import DolceBlue from "../assets/_Dolce_Gabbana_Blue_Pour_Homme_Gift_Set_of_3.png";
import DolceTheOnlyOne from "../assets/_Dolce_Gabbana_The__Only_One_Gift_Set_of_3.png";
import MyBurberry from "../assets/_My_Burberry_England_Gift_Set_of_4.png";
import TomFord from "../assets/_Tom_Ford_EDP_Gift_Set_of_4.png";
import Valentino from "../assets/_Valentino_Uomo_Born_in_Roma_EDT_Gift_Set_of_3.png";
import VipBlack from "../assets/212 VIP BLACKk.png";
import VipSexy from "../assets/212_SEXY_MEN_EAU_DE_TOILETTE_1.png";
import AcquaPerfume from "../assets/ACQUA_DI_GIO_GIOR perfume - Copy (3).jpg";
import ArmanBecause from "../assets/ARMAN_I because its YOU - Copy (3).png";
import ArmanLove from "../assets/ARMAN-I IN LOVE WITH - Copy (2).png";
import AzzaroElixir from "../assets/AZZARO FOREVER WANTED ELIXIR - Copy (2).png";
import AzzaroSilver from "../assets/AZZARO WANTED EDP SILVER - Copy (3).png";
import AzzaroTonic from "../assets/AZZARO WANTED TONIC EDT - Copy (3).png";
import AzzaroWanted from "../assets/AZZARO_WANTED BY PERFUME - Copy (2).jpg";
import Bvlgari from "../assets/Bvlgari Omnia Gift set of 3.png";
import CalvinPerfume from "../assets/CALVIN PERFUME.jpg";
import CalvinEdt from "../assets/CALVIN_KLAIN_EDTT - Copy.png";
import Chloe from "../assets/Chloe Eau De Parfum Gift Set Of 4.png";
import GoodGirl from "../assets/COROLINA HERRERA GOOD GIRL ITS SO GOOD TO BE BAD - Copy.png";
import Darcy from "../assets/Darcy perfumes de marly paris - Copy.png";
import Denver from "../assets/DENVER78.jpg";
import DiorAddict from "../assets/DIOR_ADDICT_EAU_FRAICHE - Copy.png";
import Engage from "../assets/ENGAGE78 - Copy.jpg";
import GioArman from "../assets/GIO_GIORGIO_ARMAN.jpg";
import GiorgioSi from "../assets/Giorgio si - Copy.png";
import Givenchy from "../assets/Givenchy Irresistible Gift Set of 3 - Copy (2).png";
import Invictus from "../assets/INVICTUS INTENSE - Copy.png";
import MaisonMargiela from "../assets/Maison Margiela Paris Replica Gift Set of 4.png";
import MyBurberryEDP from "../assets/MY_BURBERRY_EAU_DE_PURFUME - Copy.png";
import Narciso from "../assets/NARCISO RODRIGIGUEZ FOR HER EDT.png";
import Paco from "../assets/Paco Rabanne 1 Million Gift Set of 3.png";
import Twilly from "../assets/TWILLY dHermes.png";
import VersaceEros from "../assets/Versace eros gift set of 4.png";
import VictoriaSecret from "../assets/Victoria Secret EDP Gift Set of 4.png";
import YslRed from "../assets/YSL BLACL OPIUM OVER RED.png";
import YslLibre from "../assets/YSL LIBRE EDP Intense.png";
import YslOpium from "../assets/YSL_BLACK_OPIUM_EAU_DE_PARFUME.jpg";
import YslParis from "../assets/YSL_MON PARIS-EDP.png";

// ✅ Perfume products array with old price & discount
const perfumes = [
  { id: 1, name: "_ACQUA_DI_GIO_GIORGIO_ARMAN_white", price: "₹2498.00", oldPrice: "₹5,000", discount: "10% off", image: AcquaDiGio },
  { id: 2, name: "_Calvin_Klein_Gift_Set_4", price: "₹2599.0", oldPrice: "₹4,500", discount: "11% off", image: CalvinKlein },
  { id: 3, name: "_Dolce_Gabbana_Blue_Pour_Homme_Gift_Set_of_3", price: "₹2499.0", oldPrice: "₹5,500", discount: "9% off", image: DolceBlue },
  { id: 4, name: "_Dolce_Gabbana_The__Only_One_Gift_Set_of_3", price: "₹2500.00", oldPrice: "₹5,200", discount: "8% off", image: DolceTheOnlyOne },
  { id: 5, name: "_My_Burberry_England_Gift_Set_of_4", price: "₹4200", oldPrice: "₹5,800", discount: "10% off", image: MyBurberry },
  { id: 6, name: "_Tom_Ford_EDP_Gift_Set_of_4", price: "₹2599.00", oldPrice: "₹9,000", discount: "11% off", image: TomFord },
  { id: 7, name: "_Valentino_Uomo_Born_in_Roma_EDT_Gift_Set_of_3", price: "₹2499.00", oldPrice: "₹6,000", discount: "8% off", image: Valentino },
  { id: 8, name: "212 VIP BLACKk", price: "₹1500", oldPrice: "₹4,000", discount: "13% off", image: VipBlack },
  { id: 9, name: "212_SEXY_MEN_EAU_DE_TOILETTE_1", price: "₹2499.00", oldPrice: "₹4,200", discount: "12% off", image: VipSexy },
  { id: 10, name: "ACQUA_DI_GIO_GIOR perfume ", price: "₹2499.00", oldPrice: "₹4,800", discount: "10% off", image: AcquaPerfume },
  { id: 11, name: "ARMAN_I because its YOU ", price: "₹1000", oldPrice: "₹4,500", discount: "9% off", image: ArmanBecause },
  { id: 12, name: "ARMAN-I IN LOVE WITH ", price: "₹2599.00", oldPrice: "₹4,600", discount: "9% off", image: ArmanLove },
  { id: 13, name: "AZZARO FOREVER WANTED ELIXIR ", price: "₹2689.00", oldPrice: "₹5,000", discount: "8% off", image: AzzaroElixir },
  { id: 14, name: "AZZARO WANTED EDP SILVER ", price: "₹2900", oldPrice: "₹4,400", discount: "9% off", image: AzzaroSilver },
  { id: 15, name: "AZZARO WANTED TONIC EDT ", price: "₹2500", oldPrice: "₹4,300", discount: "9% off", image: AzzaroTonic },
  { id: 16, name: "AZZARO_WANTED BY PERFUME ", price: "₹2499.00", oldPrice: "₹5,200", discount: "10% off", image: AzzaroWanted },
  { id: 17, name: "Bvlgari Omnia Gift set of 3", price: "₹2800", oldPrice: "₹6,500", discount: "8% off", image: Bvlgari },
  { id: 18, name: "CALVIN PERFUME", price: "₹3,000", oldPrice: "₹3,400", discount: "12% off", image: CalvinPerfume },
  { id: 19, name: "CALVIN_KLAIN_EDTT ", price: "₹1200", oldPrice: "₹3,600", discount: "11% off", image: CalvinEdt },
  { id: 20, name: "Chloe Eau De Parfum Gift Set Of 4", price: "₹2500", oldPrice: "₹7,000", discount: "7% off", image: Chloe },
  { id: 21, name: "COROLINA HERRERA GOOD GIRL ITS SO GOOD TO BE BAD ", price: "₹1700", oldPrice: "₹6,000", discount: "5% off", image: GoodGirl },
  { id: 22, name: "Darcy perfumes de marly paris ", price: "₹5,300", oldPrice: "₹1800", discount: "8% off", image: Darcy },
  { id: 23, name: "DENVER78", price: "₹800", oldPrice: "₹1,000", discount: "20% off", image: Denver },
  { id: 24, name: "DIOR_ADDICT_EAU_FRAICHE ", price: "₹3,500", oldPrice: "₹8,000", discount: "6% off", image: DiorAddict },
  { id: 25, name: "ENGAGE78 ", price: "₹500", oldPrice: "₹700", discount: "28% off", image: Engage },
  { id: 26, name: "GIO_GIORGIO_ARMAN", price: "₹2900", oldPrice: "₹5,200", discount: "6% off", image: GioArman },
  { id: 27, name: "Giorgio si", price: "₹2499.0", oldPrice: "₹5,500", discount: "7% off", image: GiorgioSi },
  { id: 28, name: "Givenchy Irresistible Gift Set of 3 ", price: "₹2450.00", oldPrice: "₹6,800", discount: "6% off", image: Givenchy },
  { id: 29, name: "INVICTUS INTENSE ", price: "₹2000", oldPrice: "₹2500", discount: "8% off", image: Invictus },
  { id: 30, name: "Maison Margiela Paris Replica Gift Set of 4", price: "₹3000", oldPrice: "₹7,500", discount: "7% off", image: MaisonMargiela },
  { id: 31, name: "MY_BURBERRY_EAU_DE_PURFUME ", price: "₹2600", oldPrice: "₹6000", discount: "7% off", image: MyBurberryEDP },
  { id: 32, name: "NARCISO RODRIGIGUEZ FOR HER EDT", price: "₹2500", oldPrice: "₹5,800", discount: "7% off", image: Narciso },
  { id: 33, name: "Paco Rabanne 1 Million Gift Set of 3", price: "₹3900", oldPrice: "₹7,000", discount: "7% off", image: Paco },
  { id: 34, name: "TWILLY dHermes", price: "₹6,000", oldPrice: "₹3000", discount: "7% off", image: Twilly },
  { id: 35, name: "Versace eros gift set of 4", price: "₹2590", oldPrice: "₹7,200", discount: "6% off", image: VersaceEros },
  { id: 36, name: "Victoria Secret EDP Gift Set of 4", price: "₹2500", oldPrice: "₹6,200", discount: "6% off", image: VictoriaSecret },
  { id: 37, name: "YSL BLACL OPIUM OVER RED", price: "₹2,300", oldPrice: "₹7,800", discount: "6% off", image: YslRed },
  { id: 38, name: "YSL LIBRE EDP Intense", price: "₹2,200", oldPrice: "₹7,700", discount: "6% off", image: YslLibre },
  { id: 39, name: "YSL_BLACK_OPIUM_EAU_DE_PARFUME", price: "₹1,000", oldPrice: "₹7,500", discount: "6% off", image: YslOpium },
  { id: 40, name: "YSL_MON PARIS-EDP", price: "₹2,400", oldPrice: "₹7,900", discount: "6% off", image: YslParis },
];


const PerfumePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (prod) => setSelectedProduct(prod);
  const handleBack = () => setSelectedProduct(null);

  const relatedProducts = selectedProduct
    ? perfumes.filter((p) => p.id !== selectedProduct.id)
    : [];

  return (
    <div className="perfume-page">
      {!selectedProduct ? (
        <>
          <h2 className="page-title">Perfume Collection</h2>
          <div className="perfume-grid">
            {perfumes.map((prod) => (
              <div
                key={prod.id}
                className="perfume-card"
                onClick={() => handleProductClick(prod)}
              >
                <div className="perfume-image">
                  <img src={prod.image} alt={prod.name} />
                </div>
                <h4>{prod.name}</h4>
                <p className="old-price">{prod.oldPrice}</p>
                <p className="current-price">{prod.price}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="perfume-details">
          
          <div className="details-container">
            <div className="details-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="details-info">
              <h2>{selectedProduct.name}</h2>
              <p className="old-price">{selectedProduct.oldPrice}</p>
              <p className="current-price">{selectedProduct.price}</p>

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
                    <p className="current-price">{p.price}</p>
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

export default PerfumePage;