import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

//----images-----
import icon from "../images/icon.png";
//---------------

function Navbar() {
  return (
    <div className="navbar">
      <div className="border">
        <div div className="brand">
          <img src={icon} alt="" />
          <div className="brandname">
            <h6>Seedling</h6>
          </div>
        </div>

        <div className="links">
          <span>
            <Link to="/" style={{ color: "#046813", textDecoration: "none" }}>
              Home
            </Link>
          </span>
          <span>
            <Link
              to="/about"
              style={{ color: "#046813", textDecoration: "none" }}
            >
              About
            </Link>
          </span>
          <span>
            <Link
              to="/tree"
              style={{ color: "#046813", textDecoration: "none" }}
            >
              Trees
            </Link>
          </span>
          <span>
            {" "}
            <Link
              to="/"
              style={{ color: "#046813", textDecoration: "none" }}
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
