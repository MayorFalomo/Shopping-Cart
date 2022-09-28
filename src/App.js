import { useReducer, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Cartmenu from "./pages/Cartmenu";
import Homepage from "./pages/Homepage";

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image:
        "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
      ItemName: "Samsung Galaxy S8",
      price: 200.0,
      remove: "remove",
    },
    {
      id: 2,
      image:
        "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
      ItemName: "Google Pixel",
      price: 900.0,
      remove: "remove",
    },
    {
      id: 3,
      image:
        "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
      ItemName: "Xiaomi Redmi Note 2",
      price: 600.0,
      remove: "remove",
    },
    {
      id: 4,
      image:
        "https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
      ItemName: "Samsung Galaxy S8",
      price: 300.0,
      remove: "remove",
    },
  ]);

  const [cartCheckOut, setCartCheckOut] = useState([]);

  // const [currentQuantity, setCurrentQuantity] = useState(1)

  // const [sumTotal, setSumTotal] = useState(cartCheckOut.price.reduce)


     

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              cartItems={cartItems}
              setCartItems={setCartItems}
              cartCheckOut={cartCheckOut}
              setCartCheckOut={setCartCheckOut}
            />
          }
        />
         
        <Route
          path="/cartmenu"
          element={
            <Cartmenu
              cartItems={cartItems}
              setCartItems={setCartItems}
              cartCheckOut={cartCheckOut}
              setCartCheckOut={setCartCheckOut}
              // currentQuantity={currentQuantity}
              // setCurrentQuantity={setCurrentQuantity}
    
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
