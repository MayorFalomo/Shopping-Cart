import React, { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import {IoCheckmarkDone} from 'react-icons/io5'

const DataChild = ({
  cartItem,
  addToCart,
}) => {

      const [displayButton, setDisplayButton] = useState(false);

  return (
    <div>
      <div className="productCards" key={cartItem.id}>
        <div className="mainCard">
          <div className="cartImage">
            <img src={cartItem.image} alt="img" />
          </div>
          <p>{cartItem.ItemName}</p>
          <h3>${cartItem.price}</h3>
          {displayButton ? (
            <button
              className="addedBtn"
              onClick={() => setDisplayButton(displayButton)}
            >
              Added {<IoCheckmarkDone/>}{" "}
            </button>
          ) : (
            <button
              onClick={() => {
                addToCart(cartItem);
                setDisplayButton(!displayButton);
              }}
              typeof="button"
              className="addCartBtn"
            >
              Add to {<BsCartCheck />}{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataChild;
