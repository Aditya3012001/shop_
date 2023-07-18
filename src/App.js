import Header from "./components/Header";
import Summary from "./components/Summary";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);

  const showHandler = () => {
    setCart(true);
  };

  const hideHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart onHide={hideHandler} />}
      <Header onShow={showHandler} onHide={hideHandler} />
      <Summary />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
