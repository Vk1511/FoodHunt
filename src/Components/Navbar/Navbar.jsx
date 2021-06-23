import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar({ handleSearch }) {
  return (
    <div className="navbar">
      <div className="nav_icon">
        <img src={logo} alt="logo" className="logo" />
        <span className="site_title">FoodHunt</span>
      </div>

      <div className="nav_search_box">
        <input
          type="search"
          className="search_bbox"
          placeholder="Serch Recipe"
          onChange={(event) => handleSearch(event)}
        />
      </div>
    </div>
  );
}

export default Navbar;
