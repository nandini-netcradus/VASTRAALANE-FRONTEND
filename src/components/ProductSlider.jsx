import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";   // ✅ import Link
import "../scss/_productSlider.scss";

// ✅ Import images
import sunglassesImg from "../assets/Sunglasses0.jpg";
import perfume from "../assets/_My_Burberry_England_Gift_Set_of_4.png";
import loafer from "../assets/LOAFERS0.png";
import trouser from "../assets/Louis Vuitton Black Beige Monogram Imported Premium Tracksuit With Carry Bag - Copy.png";
import tracksuit from "../assets/TRACKSUIT0.png";
import girlsShoes from "../assets/SGIRLSHOES0.png";
import luxuryWatchImg from "../assets/LUXURYWATCH78.jpg";
import handbag from "../assets/SHANDBAG0.png";
import flipflop from "../assets/NIK_E AIR MAX 1 FLIP FLOP ALL BLACK.png";
import girlsWatchImg from "../assets/GIRLWATCH0.png";
import tshirt from "../assets/SHOWCASE0.png";

function ProductSlider() {
  const products = [
    { name: "Sunglasses", img: sunglassesImg, path: "/sunglasses" },
    { name: "Perfumes", img: perfume, path: "/perfume" },
    { name: "Loafer", img: loafer, path: "/loafers" },
    { name: "Trouser", img: trouser, path: "/trousers" },
    { name: "Tracksuit", img: tracksuit, path: "/tracksuit" },
    { name: "Mens Shoes", img: girlsShoes, path: "/menshoes" },
    { name: "Luxury Watch", img: luxuryWatchImg, path: "/luxury-watch" },
    { name: "Handbags and Bags", img: handbag, path: "/handbags" },
    { name: "Flipflop", img: flipflop, path: "/flipflops" },
    { name: "Girls Watches", img: girlsWatchImg, path: "/girls-watch" },
    { name: "T-Shirt and Shirts", img: tshirt, path: "/tshirts" },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="product-slider">
      <h2 className="slider-title">Featured Products</h2>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <Link to={item.path}>   {/* ✅ Add Link */}
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
