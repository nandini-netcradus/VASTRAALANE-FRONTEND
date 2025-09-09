
// import React, { useState } from "react";
// import "../scss/_navbar.scss";
// import { FaBars, FaTimes, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       {/* <div className="logo">Vastraaalane</div> */}

//       {/* Links + Drawer */}
//       <ul className={menuOpen ? "nav-links open" : "nav-links"}>
//         <li><a href="/">Home</a></li>
//         <li><a href="/products">Products</a></li>
//         <li><a href="/category">Category</a></li>

//         {/* ✅ Drawer ke andar icons */}
//         <div className="drawer-icons">
//           <FaSearch className="icon" />
//           <FaUser className="icon" />
//           <FaShoppingCart className="icon" />
//         </div>
//       </ul>

//       {/* ✅ Desktop ke liye icons */}
//       <div className="nav-icons">
//         <FaSearch className="icon" />
//         <FaUser className="icon" />
//         <FaShoppingCart className="icon" />
//       </div>

//       {/* Mobile Hamburger */}
//       <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import "../scss/_navbar.scss";
import { FaBars, FaTimes, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

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
          <FaSearch className="icon" />
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </ul>

      {/* ✅ Desktop ke liye icons */}
      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
      </div>

      {/* Mobile Hamburger */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
