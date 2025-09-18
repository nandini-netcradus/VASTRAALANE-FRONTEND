import React, { useState } from "react";
import "../scss/_menshoes.scss";
import { useCart } from "../context/CartContext";

// ✅ Import all shoe images
import Adapt_Automax_Full_Black_Shoes from "../assets/Adapt_Automax_Full_Black_Shoes.jpg";
import Adida_ss_Yeezy_Boost_350_V2_Carbon_Beluga_SEMI_UA_With_All_Accesories from "../assets/Adida_ss Yeezy Boost 350 V2 Carbon Beluga SEMI UA With All Accesories .png";
import ADIDAS from "../assets/ADIDAS.jpg";
import Adidass_Fear_Of_God_Athletic_1_Indiana from "../assets/Adidass Fear Of God Athletic 1 Indiana.png";
import Adidass_Yeezy_350_V2_Bone_White_SEMI_UA_With_All_Accesories_Copy_2 from "../assets/Adidass Yeezy 350 V2 Bone White SEMI UA With All Accesories - Copy (2).png";
import Adidass_Yeezy_Boost_350_V2_Beluga_SEMI_UA_With_All_Accesories from "../assets/Adidass Yeezy Boost 350 V2 Beluga SEMI UA With All Accesories.png";
import Adidass_Yeezy_Boost_350_V2_Oreo_SEMI_UA_With_All_Accesories_Copy_2 from "../assets/Adidass Yeezy Boost 350 V2 Oreo SEMI UA With All Accesories - Copy (2).png";
import Airforce_1_milky_white_pure_leather_Copy from "../assets/airforce 1 milky white pure leather - Copy.png";
import ALEXANDER_MCQUEEN_PREMIUM_WHITE_SNEAKER from "../assets/ALEXANDER MCQUEEN PREMIUM WHITE SNEAKER.png";
import Balencia_gaa_Cargo_Sneakers from "../assets/Balencia gaa Cargo Sneakers.jpg";
import Balenciaga_track_trainer_with_full_accessories_triple_black_sale_Copy_2 from "../assets/balenciag a track trainer with full accessories triple black sale - Copy (2).png";
import Golden_Goose_GGDB_White_Leather_BallStar_Sneakers_With_OG_Box from "../assets/Golden Goose GGDB White Leather BallStar Sneakers With OG Box.jpg";
import Gucci_GG_Monogram_Canvas_Leather_Espadrilles_Blue_With_OG_Box_Carry_Bag_888_100_Blue_Copy from "../assets/Gucci_GG_Monogram_Canvas_Leather_Espadrilles_Blue_With_OG_Box_&_Carry_Bag_888-100_Blue - Copy.jpg";
import Gucci_princetown_Copy_2 from "../assets/Gucci_princetown - Copy (2).jpg";
import Hoka_cielo_x1_2_0_race_frost_lava_Copy_2 from "../assets/hoka cielo x1 2 0 race frost lava - Copy (2).png";
import Hoka_Stinson_ATR_7_Grey_Copy_2 from "../assets/Hoka Stinson ATR 7 Grey - Copy (2).png";
import Lacostee_audyssor_trail_24_Copy_2 from "../assets/Lacostee audyssor trail 24 - Copy (2).png";
import Lacostee_audyssor_trail_White_Copy from "../assets/Lacostee audyssor trail White - Copy.jpg";
import Lacostee_audyssor_trail_White_Copy2 from "../assets/Lacostee audyssor trail White - Copy.png";
import Lacostee_L003_2K24_White_Green_Copy_2 from "../assets/Lacostee L003 2K24 White Green - Copy (2).png";
import Lacosteee_audyssor_trail_24_Copy from "../assets/Lacosteee audyssor trail 24 - Copy.png";
import Loewe_x_on_cloudtilt_2_0_triple_white from "../assets/loewe x on cloudtilt 2 0 triple white.png";
import Louis_Vuitton_Glitter_Shoes from "../assets/Louis_Vuitton_Glitter_Shoes.jpg";
import MENSHOES78 from "../assets/MENSHOES78.jpg";
import New_Balance_1906_Glow_In_Dark_Copy from "../assets/New Balance 1906 Glow In Dark - Copy.png";
import New_Balance_fresh_foam_x_trail_more_v3_black_red from "../assets/New_Balance fresh foam x trail more v3 black red.png";
import Nigel_sylvester_x_air_jordan_4_retro_og_sp_brick_by_brick from "../assets/nigel sylvester x air jorda n 4 retro og sp brick by brick.png";
import Nike_Airforce_1_07_ashen_slatee from "../assets/Nik e Airforce 1 07 ashen slatee.png";
import Nike_Airmax_90_terrascape_fuel_orange_Copy from "../assets/Nik e Airmax 90 terrascape fuel orange - Copy.png";
import Nike_airmax_dn_all_day_sale from "../assets/Nik e airmax dn all day sale.png";
import Nike_Air_Jordan_1_Low_Paris_Copy from "../assets/Nik_ee Air Jordan 1 Low Paris - Copy.png";
import Nike_Air_Jordan_Retro_4_Snorlex_SEMI_UA from "../assets/Nik_ee Air Jordan Retro 4 Snorlex SEMI UA.png";
import Nike_Copy from "../assets/Nike - Copy.jpg";
import Nike_AirForce_1_Short_WHITE_shoes_Copy from "../assets/Nike AirForce 1 Short WHITE shoes - Copy.png";
import Nike_Airforce_AMG_Legendary from "../assets/Nike_Airforce_AMG_Legendary.jpg";
import Nike from "../assets/Nike.jpg";
import Nikee_Air_Jordan_1_Low_SE_COCONUT_MILK_BLACK from "../assets/Nikee Air Jordan 1 Low SE COCONUT MILK BLACK.png";
import Nikee_Air_Jordan_Retro_4_SB_NAVY_Copy from "../assets/Nikee Air Jordan Retro 4 SB NAVY - Copy.png";
import Nikee_Airforce_1_Low_Light_Armoury_Blue from "../assets/Nikee Airforce 1 Low Light Armoury Blue.png";
import Nikee_Airforce_1_WHITE_BLACK from "../assets/Nikee Airforce 1 WHITE BLACK.png";
import Nikee_Running_Alphafly_2_Ekiden_Pack_Multi from "../assets/Nikee Running Alphafly 2 Ekiden Pack Multi.png";
import Nikee_Sb_Dunk_low_Monsoon_Blue_Premium from "../assets/Nikee Sb Dunk low Monsoon Blue Premium.png";
import Nike_SB_Dunk_Panda_Womens_Copy from "../assets/Nikee SB Dunk Panda Women s... - Copy.jpeg";
import Nikeee_Air_Jordan_4_RM_Light_Bone from "../assets/Nikeee Air Jordan 4 RM Light Bone.png";
import Nike_Air_Jordan_Retro_1_High_SEMI_UA from "../assets/nikeeee air jordan retro 1 high semi ua.png";
import On_Cloud_Stratus_V3_Black_White from "../assets/On Cloud Stratus V3 Black White.png";
import On_Cloud_Tilt_2_0_Black_Ivory_Copy from "../assets/On Cloud Tilt 2 0 Black Ivory - Copy.png";
import On_Cloud_Tilt_Running_Iron_Dew from "../assets/On Cloud Tilt Running Iron Dew.png";
import On_Cloud_Tilt_ruunning_Iron_Dew from "../assets/On Cloud Tilt ruunning Iron Dew.png";
import Onitsuka_Mexico_66_Brich_green_217 from "../assets/Onitsuka Mexico 66 Brich green 217.png";
import Onitsuka_Tiger_Mexico_66_151 from "../assets/Onitsuka Tiger Mexico 66 151.png";
import Onitsuka_Tiger_Mexico_66_Biege_Grass_Green_221 from "../assets/Onitsuka Tiger Mexico 66 Biege Grass Green 221.png";
import Onitsuka_Tiger_Mexico_66_Black_Classic_Red_240_Copy from "../assets/Onitsuka Tiger Mexico 66 Black Classic Red 240 - Copy.png";
import Onitsuka_Tiger_Mexico_66_Cactus_Green_220 from "../assets/Onitsuka Tiger Mexico 66 cactus Green 220.png";
import Onitsuka_Tiger_Mexico_66_Sabot_Half_Cut_Shoe_Sneaker_White_Green_Copy from "../assets/Onitsuka Tiger Mexico 66 Sabot Half Cut Shoe Sneaker White Green - Copy.png";
import Onitsuka_Tiger_Mexico_66_Sabot_Half_Cut_Sneaker_White_blue_red from "../assets/Onitsuka Tiger Mexico 66 Sabot Half Cut Sneaker White blue red.png";
import Onitsuka_Tiger_Mexico_66_SD_Cream_Black_Orange_For_Her_276 from "../assets/Onitsuka Tiger Mexico 66 SD Cream Black Orange For Her 276.png";
import Onitsuka_Tiger_Mexico_66_SD_Pink_252 from "../assets/Onitsuka Tiger Mexico 66 SD Pink (252.png";
import Onitsuka_Tiger_Mexico_66_Slip_On_Black_105 from "../assets/Onitsuka Tiger Mexico 66 Slip On Black 105.png";
import Onitsuka_Tiger_Mexico_66_Slip_On_Green_For_Her from "../assets/Onitsuka Tiger Mexico 66 Slip On Green For Her.png";



const menshoes = [
  { id: 1, name: "Adapt_Automax_Full_Black_Shoes", price: 1500, oldPrice: 16000, discount: "6% off", image: Adapt_Automax_Full_Black_Shoes },
  { id: 2, name: "Adida_ss_Yeezy_Boost_350_V2_Carbon_Beluga_SEMI_UA_With_All_Accesories", price: 2200, oldPrice: 24000, discount: "8% off", image: Adida_ss_Yeezy_Boost_350_V2_Carbon_Beluga_SEMI_UA_With_All_Accesories },
  { id: 3, name: "ADIDAS", price: 12000, oldPrice: 1300, discount: "7% off", image: ADIDAS },
  { id: 4, name: "Adidass_Fear_Of_God_Athletic_1_Indiana", price: 1800, oldPrice: 20000, discount: "10% off", image: Adidass_Fear_Of_God_Athletic_1_Indiana },
  { id: 5, name: "Adidass_Yeezy_350_V2_Bone_White_SEMI_UA_With_All_Accesories_Copy_2", price: 2000, oldPrice: 22000, discount: "9% off", image: Adidass_Yeezy_350_V2_Bone_White_SEMI_UA_With_All_Accesories_Copy_2 },
  { id: 6, name: "Adidass_Yeezy_Boost_350_V2_Beluga_SEMI_UA_With_All_Accesories", price: 2110, oldPrice: 23000, discount: "8% off", image: Adidass_Yeezy_Boost_350_V2_Beluga_SEMI_UA_With_All_Accesories },
  { id: 7, name: "Adidass_Yeezy_Boost_350_V2_Oreo_SEMI_UA_With_All_Accesories_Copy_2", price: 2150, oldPrice: 23500, discount: "8.5% off", image: Adidass_Yeezy_Boost_350_V2_Oreo_SEMI_UA_With_All_Accesories_Copy_2 },
  { id: 8, name: "Airforce_1_milky_white_pure_leather_Copy", price: 1200, oldPrice: 12500, discount: "4% off", image: Airforce_1_milky_white_pure_leather_Copy },
  { id: 9, name: "ALEXANDER_MCQUEEN_PREMIUM_WHITE_SNEAKER", price: 2500, oldPrice: 27000, discount: "7% off", image: ALEXANDER_MCQUEEN_PREMIUM_WHITE_SNEAKER },
  { id: 10, name: "Balencia_gaa_Cargo_Sneakers", price: 1400, oldPrice: 15000, discount: "6% off", image: Balencia_gaa_Cargo_Sneakers },
  { id: 11, name: "Balenciaga_track_trainer_with_full_accessories_triple_black_sale_Copy_2", price: 1700, oldPrice: 18000, discount: "6% off", image: Balenciaga_track_trainer_with_full_accessories_triple_black_sale_Copy_2 },
  { id: 12, name: "Golden_Goose_GGDB_White_Leather_BallStar_Sneakers_With_OG_Box", price: 2200, oldPrice: 24000, discount: "8% off", image: Golden_Goose_GGDB_White_Leather_BallStar_Sneakers_With_OG_Box },
  { id: 13, name: "Gucci_GG_Monogram_Canvas_Leather_Espadrilles_Blue_With_OG_Box_Carry_Bag_888_100_Blue_Copy", price: 3000, oldPrice: 32000, discount: "6% off", image: Gucci_GG_Monogram_Canvas_Leather_Espadrilles_Blue_With_OG_Box_Carry_Bag_888_100_Blue_Copy },
  { id: 14, name: "Gucci_princetown_Copy_2", price: 2800, oldPrice: 30000, discount: "7% off", image: Gucci_princetown_Copy_2 },
  { id: 15, name: "Hoka_cielo_x1_2_0_race_frost_lava_Copy_2", price: 1400, oldPrice: 15000, discount: "6.5% off", image: Hoka_cielo_x1_2_0_race_frost_lava_Copy_2 },
  { id: 16, name: "Hoka_Stinson_ATR_7_Grey_Copy_2", price: 1450, oldPrice: 15500, discount: "6% off", image: Hoka_Stinson_ATR_7_Grey_Copy_2 },
  { id: 17, name: "Lacostee_audyssor_trail_24_Copy_2", price: 1200, oldPrice: 12500, discount: "4% off", image: Lacostee_audyssor_trail_24_Copy_2 },
  { id: 18, name: "Lacostee_audyssor_trail_White_Copy", price: 1200, oldPrice: 13000, discount: "3.5% off", image: Lacostee_audyssor_trail_White_Copy },
  { id: 19, name: "Lacostee_audyssor_trail_White_Copy2", price: 1250, oldPrice: 13000, discount: "3.5% off", image: Lacostee_audyssor_trail_White_Copy2 },
  { id: 20, name: "Lacostee_L003_2K24_White_Green_Copy_2", price: 1350, oldPrice: 14500, discount: "7% off", image: Lacostee_L003_2K24_White_Green_Copy_2 },
  { id: 21, name: "Lacosteee_audyssor_trail_24_Copy", price: 1200, oldPrice: 12500, discount: "4% off", image: Lacosteee_audyssor_trail_24_Copy },
  { id: 22, name: "Loewe_x_on_cloudtilt_2_0_triple_white", price: 1800, oldPrice: 20000, discount: "10% off", image: Loewe_x_on_cloudtilt_2_0_triple_white },
  { id: 23, name: "Louis_Vuitton_Glitter_Shoes", price: 3000, oldPrice: 32000, discount: "6% off", image: Louis_Vuitton_Glitter_Shoes },
  { id: 24, name: "MENSHOES78", price: 1400, oldPrice: 15000, discount: "6.5% off", image: MENSHOES78 },
  { id: 25, name: "New_Balance_1906_Glow_In_Dark_Copy", price: 1200, oldPrice: 12500, discount: "4% off", image: New_Balance_1906_Glow_In_Dark_Copy },
  { id: 26, name: "New_Balance_fresh_foam_x_trail_more_v3_black_red", price: 1350, oldPrice: 14500, discount: "7% off", image: New_Balance_fresh_foam_x_trail_more_v3_black_red },
  { id: 27, name: "Nigel_sylvester_x_air_jordan_4_retro_og_sp_brick_by_brick", price: 2500, oldPrice: 27000, discount: "7% off", image: Nigel_sylvester_x_air_jordan_4_retro_og_sp_brick_by_brick },
  { id: 28, name: "Nike_Airforce_1_07_ashen_slatee", price: 1200, oldPrice: 13000, discount: "7% off", image: Nike_Airforce_1_07_ashen_slatee },
  { id: 29, name: "Nike_Airmax_90_terrascape_fuel_orange_Copy", price: 1350, oldPrice: 14500, discount: "7% off", image: Nike_Airmax_90_terrascape_fuel_orange_Copy },
  { id: 30, name: "Nike_airmax_dn_all_day_sale", price: 1200, oldPrice: 13000, discount: "7% off", image: Nike_airmax_dn_all_day_sale },
  { id: 31, name: "Nike_Air_Jordan_1_Low_Paris", price: 2200, oldPrice: 24000, discount: "8% off", image: Nike_Air_Jordan_1_Low_Paris_Copy },
  { id: 32, name: "Nike_Air_Jordan_Retro_4_Snorlex_SEMI_UA", price: 2250, oldPrice: 24500, discount: "8% off", image: Nike_Air_Jordan_Retro_4_Snorlex_SEMI_UA },
  { id: 33, name: "Nike_Copy", price: 1500, oldPrice: 16000, discount: "6% off", image: Nike_Copy },
  { id: 34, name: "Nike_AirForce_1_Short_WHITE_shoes_Copy", price: 1200, oldPrice: 12500, discount: "4% off", image: Nike_AirForce_1_Short_WHITE_shoes_Copy },
  { id: 35, name: "Nike_Airforce_AMG_Legendary", price: 1800, oldPrice: 20000, discount: "10% off", image: Nike_Airforce_AMG_Legendary },
  { id: 36, name: "Nike", price: 1400, oldPrice: 15000, discount: "6% off", image: Nike },
  { id: 37, name: "Nikee_Air_Jordan_1_Low_SE_COCONUT_MILK_BLACK", price: 2000, oldPrice: 24000, discount: "8% off", image: Nikee_Air_Jordan_1_Low_SE_COCONUT_MILK_BLACK },
  { id: 38, name: "Nikee_Air_Jordan_Retro_4_SB_NAVY_Copy", price: 2500, oldPrice: 24500, discount: "8% off", image: Nikee_Air_Jordan_Retro_4_SB_NAVY_Copy },
  { id: 39, name: "Nikee_Airforce_1_Low_Light_Armoury_Blue", price: 1500, oldPrice: 16000, discount: "6% off", image: Nikee_Airforce_1_Low_Light_Armoury_Blue },
  { id: 40, name: "Nikee_Airforce_1_WHITE_BLACK", price: 1400, oldPrice: 15000, discount: "6% off", image: Nikee_Airforce_1_WHITE_BLACK },
  { id: 41, name: "Nikee_Running_Alphafly_2_Ekiden_Pack_Multi", price: 2500, oldPrice: 27000, discount: "7% off", image: Nikee_Running_Alphafly_2_Ekiden_Pack_Multi },
  { id: 42, name: "Nikee_Sb_Dunk_low_Monsoon_Blue_Premium", price: 2000, oldPrice: 22000, discount: "9% off", image: Nikee_Sb_Dunk_low_Monsoon_Blue_Premium },
  { id: 43, name: "Nike_SB_Dunk_Panda_Womens_Copy", price: 2100, oldPrice: 23000, discount: "8% off", image: Nike_SB_Dunk_Panda_Womens_Copy },
  { id: 44, name: "Nikeee_Air_Jordan_4_RM_Light_Bone", price: 2300, oldPrice: 25000, discount: "8% off", image: Nikeee_Air_Jordan_4_RM_Light_Bone },
  { id: 45, name: "Nike_Air_Jordan_Retro_1_High_SEMI_UA", price: 2200, oldPrice: 24000, discount: "8% off", image: Nike_Air_Jordan_Retro_1_High_SEMI_UA },
  { id: 46, name: "On_Cloud_Stratus_V3_Black_White", price: 1800, oldPrice: 20000, discount: "10% off", image: On_Cloud_Stratus_V3_Black_White },
  { id: 47, name: "On_Cloud_Tilt_2_0_Black_Ivory_Copy", price: 1750, oldPrice: 19000, discount: "7% off", image: On_Cloud_Tilt_2_0_Black_Ivory_Copy },
  { id: 48, name: "On_Cloud_Tilt_Running_Iron_Dew", price: 1800, oldPrice: 20000, discount: "10% off", image: On_Cloud_Tilt_Running_Iron_Dew },
  { id: 49, name: "On_Cloud_Tilt_ruunning_Iron_Dew", price: 1800, oldPrice: 20000, discount: "10% off", image: On_Cloud_Tilt_ruunning_Iron_Dew },
  { id: 50, name: "Onitsuka_Mexico_66_Brich_green_217", price: 1200, oldPrice: 12500, discount: "4% off", image: Onitsuka_Mexico_66_Brich_green_217 },
  { id: 51, name: "Onitsuka_Tiger_Mexico_66_151", price: 1200, oldPrice: 12500, discount: "4% off", image: Onitsuka_Tiger_Mexico_66_151 },
  { id: 52, name: "Onitsuka_Tiger_Mexico_66_Biege_Grass_Green_221", price: 1250, oldPrice: 13000, discount: "3.5% off", image: Onitsuka_Tiger_Mexico_66_Biege_Grass_Green_221 },
  { id: 53, name: "Onitsuka_Tiger_Mexico_66_Black_Classic_Red_240_Copy", price: 1350, oldPrice: 14500, discount: "7% off", image: Onitsuka_Tiger_Mexico_66_Black_Classic_Red_240_Copy },
  { id: 54, name: "Onitsuka_Tiger_Mexico_66_Cactus_Green_220", price: 1279.00, oldPrice: 12500, discount: "4% off", image: Onitsuka_Tiger_Mexico_66_Cactus_Green_220 },
  { id: 55, name: "Onitsuka_Tiger_Mexico_66_Sabot_Half_Cut_Shoe_Sneaker_White_Green_Copy", price: 1300, oldPrice: 14000, discount: "7% off", image: Onitsuka_Tiger_Mexico_66_Sabot_Half_Cut_Shoe_Sneaker_White_Green_Copy },
  { id: 56, name: "Onitsuka_Tiger_Mexico_66_Sabot_Half_Cut_Sneaker_White_blue_red", price: 1289.0, oldPrice: 14000, discount: "7% off", image: Onitsuka_Tiger_Mexico_66_Sabot_Half_Cut_Sneaker_White_blue_red },
  { id: 57, name: "Onitsuka_Tiger_Mexico_66_SD_Cream_Black_Orange_For_Her_276", price: 1400, oldPrice: 15000, discount: "6.5% off", image: Onitsuka_Tiger_Mexico_66_SD_Cream_Black_Orange_For_Her_276 },
  { id: 58, name: "Onitsuka_Tiger_Mexico_66_SD_Pink_252", price: 14000, oldPrice: 1500, discount: "6.5% off", image: Onitsuka_Tiger_Mexico_66_SD_Pink_252 },
  { id: 59, name: "Onitsuka_Tiger_Mexico_66_Slip_On_Black_105", price: 1200, oldPrice: 12500, discount: "4% off", image: Onitsuka_Tiger_Mexico_66_Slip_On_Black_105 },
  { id: 60, name: "Onitsuka_Tiger_Mexico_66_Slip_On_Green_For_Her", price: 1250.0, oldPrice: 12500, discount: "4% off", image: Onitsuka_Tiger_Mexico_66_Slip_On_Green_For_Her }

];
const Menshoes = () => {
  const [selectedShoe, setSelectedShoe] = useState(null);
  const { addToCart } = useCart();
  const [popup, setPopup] = useState("");

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 2000);
  };

  const handleAddToCart = (shoe) => {
    console.log(`✅ Add to Cart clicked for: ${shoe.name}`);
    addToCart(shoe);
    showPopup(`${shoe.name} added to cart!`);
  };

  return (
    <div className="menshoes-page">
      <h1 className="shoes-title">Men Shoes Collection</h1>

      {!selectedShoe ? (
        // 🔹 Grid of Shoes
        <div className="shoes-grid">
          {menshoes.map((shoe) => (
            <div
              key={shoe.id}
              className="shoe-card"
              onClick={() => setSelectedShoe(shoe)}
            >
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p className="price">
                ₹{shoe.price}
                {shoe.oldPrice && <span className="old-price">₹{shoe.oldPrice}</span>}
              </p>
              <p className="discount">{shoe.discount}</p>
            </div>
          ))}
        </div>
      ) : (
        // 🔹 Detail View
        <div className="shoe-detail">
          <div className="detail-main">
            <div className="detail-image">
              <img src={selectedShoe.image} alt={selectedShoe.name} />
            </div>

            <div className="detail-info">
              <h2>{selectedShoe.name}</h2>
              <p className="price">
                ₹{selectedShoe.price}
                {selectedShoe.oldPrice && <span className="old-price">₹{selectedShoe.oldPrice}</span>}
              </p>
              <p className="discount">{selectedShoe.discount}</p>

              <ul className="product-highlights">
                <li>✅ 7 Days Return Policy</li>
                <li>✅ Premium Quality Material</li>
                <li>✅ Free & Fast Delivery</li>
                <li>✅ Secure Payment Options</li>
              </ul>

              {/* 🔹 Actions */}
              <div className="product-actions">
                <button
                  className="btn-cart"
                  onClick={() => handleAddToCart(selectedShoe)}
                >
                  Add to Cart
                </button>
                <button className="btn-wishlist">Wishlist</button>
                <button className="btn-buy">Buy Now</button>
              </div>
            </div>
          </div>

          {/* 🔹 Related Items */}
          <h3 className="related-title">Related Items</h3>
          <div className="related-items">
            {menshoes
              .filter((s) => s.id !== selectedShoe.id)
              .slice(0, 4)
              .map((item) => (
                <div
                  key={item.id}
                  className="shoe-card"
                  onClick={() => setSelectedShoe(item)}
                >
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p className="price">
                    ₹{item.price}
                    {item.oldPrice && <span className="old-price">₹{item.oldPrice}</span>}
                  </p>
                  <p className="discount">{item.discount}</p>
                </div>
              ))}
          </div>

          {/* 🔹 Popup message */}
          {popup && <div className="popup">{popup}</div>}
        </div>
      )}
    </div>
  );
};

export default Menshoes;