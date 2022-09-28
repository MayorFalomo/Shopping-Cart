import React, { useState } from "react";
import "./Shopmenu.css";
import { BsSearch } from "react-icons/bs";
import Content from "../Components/Content";
import Data from "./Data";

const Shopmenu = ({
  cartItems,
  setCartItems,
  cartCheckOut,
  setCartCheckOut,
}) => {
  const [searchItems, setSearchItems] = useState("");

  return (
    <div className="shopMenuContainer">
      <div className="shopCard">
        <div className="flexSearch">
          <input
            className="searchInput"
            type="text"
            onChange={(e) => setSearchItems(e.target.value)}
            placeholder="Search..."
          />
          <div className="searchBtn">{<BsSearch />} </div>
        </div>

        <h1>Hello Jane</h1>
        <p>We have Some Recommendations for you</p>

        <div>
          <p>Just For You</p>
          <h3>See All</h3>
        </div>
      </div>
      <Data
        cartItems={cartItems}
        setCartItems={setCartItems}
        searchItems={searchItems}
        setSearchItems={setSearchItems}
        cartCheckOut={cartCheckOut}
        setCartCheckOut={setCartCheckOut}
      />
    </div>
  );
};

export default Shopmenu;
