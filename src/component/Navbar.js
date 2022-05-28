import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo3.png";
import "../style/Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
