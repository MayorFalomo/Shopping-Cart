import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Data from "./Data";
import Shopmenu from "./Shopmenu";

const Homepage = ({
  cartItems,
  setCartItems,
  cartCheckOut,
  setCartCheckOut,
}) => {
  
  return (
    <div>
      <Navbar cartItems={cartItems} cartCheckOut={cartCheckOut} />
      <Shopmenu
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartCheckOut={cartCheckOut}
        setCartCheckOut={setCartCheckOut}
      />
    </div>
  );
};

export default Homepage;
