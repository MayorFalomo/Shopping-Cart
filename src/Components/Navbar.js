import React from "react";
import "./Navbar.css";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems, cartCheckOut }) => {
  return (
    <div className="navContainer">
      <nav>
        <h1>UseReducer</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cartmenu">
            <div>
              <li>{<BsCartCheck />}</li>
              <h3 className="numberOfItems">{cartCheckOut.length} </h3>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
