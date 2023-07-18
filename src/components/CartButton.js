import CartIcon from "../assets/CartIcon";
import "./CartButton.css";
import { useContext } from "react";

import cartContext from "../store/Cart-Context";
const CartButton = (props) => {
  const cartctx = useContext(cartContext); // this component is rerendered whenever context is changed in provider component  // it will observe the closest provider and use its context

  const numberofitems = cartctx.items.reduce((curr, item) => {
    console.log(item);
    return curr + item.amount;
  }, 0);
  return (
    <button className="button" onClick={props.onShow}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>My cart</span>
      <span className="badge">{numberofitems}</span>
    </button>
  );
};

export default CartButton;
