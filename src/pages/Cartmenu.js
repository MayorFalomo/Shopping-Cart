import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "./Cartmenu.css";
import ProductCard from "../Components/Productcard";
import Total from "./Total";

const Cartmenu = ({
  cartItems,
  setCartItems,
  cartCheckOut, 
    setCartCheckOut,
}) => {

  const clearCart = () => {
    setCartCheckOut([]);
  };

  const removeItemBtn = (id) => {
    const removedItem = cartCheckOut.filter((cartCheck) => cartCheck.id !== id);
    setCartCheckOut(removedItem);
  };


  return (
    <div>
      <Navbar cartItems={cartItems} cartCheckOut={cartCheckOut} />
      {cartCheckOut.map((Cartcheck, index) => {
        return (
          <ProductCard
            key={index}
            Cartcheck={Cartcheck}
            cartCheckOut={cartCheckOut}
            setCartCheckOut={setCartCheckOut}
            removeItemBtn={removeItemBtn}
            />
            
        );
      })}

      {cartCheckOut.length > 0 ? <div className="totalContainer">
        <h4>Total</h4>
        <h2>${cartCheckOut.reduce((prev, curr) => (prev + curr.price), 0)} </h2>
      </div> : <h1 className="emptyText" >Your Cart is Empty </h1> }
            <button onClick={clearCart} className="clearBtn">Clear Cart</button>
       
    </div>
  );
};

export default Cartmenu;
