import "./Data.css";
import Cartmenu from "./Cartmenu";
import DataChild from "./DataChild";

const Data = ({
  cartItems,
  setCartItems,
  cartCheckOut,
  setCartCheckOut,
  searchItems,
}) => {

  const addToCart = (param) => {
    setCartCheckOut([...cartCheckOut, param]);
  };
    

  return (
    <div className="countContainer">
      {cartItems
        .filter((cartProduct) => {
          if (searchItems == "") {
            return cartProduct;
          } else if (
            cartProduct.ItemName.toLowerCase().includes   (
              searchItems.toLowerCase()
            )
          ) {
            return cartProduct;
          }
        })
        .map((cartItem, index) => {
          return (
            <DataChild
              key={index}
              addToCart={addToCart}
              cartItem={cartItem}
            />
          );
        })}
    </div>
  );
};

export default Data;
