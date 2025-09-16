import React, { useState } from "react";
import "../scss/_navbar.scss";
import { FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";

// 🔹 Logo import
import Logo from "../assets/LOGOSTYLE1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ✅ Logo Image */}
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Vastraaalane Logo" />
        </a>
      </div>

      {/* Links + Drawer */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/category">Category</a></li>

        {/* ✅ Drawer ke andar icons */}
        <div className="drawer-icons">
          <a href="/account"> <FaUser className="icon" /></a>
           <a href="/cart"> <FaShoppingCart className="icon" /></a>
        </div>
      </ul>

      {/* ✅ Desktop ke liye icons */}
      <div className="nav-icons">
          <a href="/account"> <FaUser className="icon" /></a>
         <a href="/cart"> <FaShoppingCart className="icon" /></a>
      </div>

      {/* Mobile Hamburger */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
