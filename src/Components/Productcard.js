import React, { useEffect, useReducer, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Total from "../pages/Total";
import './Productcard.css'

function Productcard({ Cartcheck,CartCheckOut, setCartCheckOut, removeItemBtn, clearCart, }) {

  const [currentQuantity, setCurrentQuantity] = useState(1)


  
  const handleAddition = () => {
    setCurrentQuantity(currentQuantity + 1)
    let Price;
    Price = Cartcheck.price;
    let currPrice;
    currPrice = Price * (currentQuantity + 1)
    Cartcheck.price = currPrice
  }


    const handleSubtraction = () => {
      setCurrentQuantity(currentQuantity - 1)
      if (currentQuantity === 1) {
        return setCurrentQuantity ( 1)
      }
    }


    return (
      <div className="over">
        <div className="CartContainer">
          <div className="flexItem">
            <div className="cartCheck">
              {" "}
              <img src={Cartcheck.image} alt="img" />
            </div>
            <div className="phoneText">
              <h2>
                <b>{Cartcheck.ItemName} </b>{" "}
              </h2>
              <span>${Cartcheck.price} </span>
              <button onClick={() => removeItemBtn(Cartcheck.id)}>remove </button>
            </div>
          </div>
          <div className="quantity">
            <button onClick={handleAddition} > {<FaAngleUp />} </button>
            <p>{currentQuantity} </p>
            <button onClick={handleSubtraction} > {<FaAngleDown />} </button>
          </div>
        </div>


      </div>
    );
  }

export default Productcard;
