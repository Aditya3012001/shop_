import CartIcon from "../assets/CartIcon";
import "./CartButton.css";
const CartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>my cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default CartButton;
