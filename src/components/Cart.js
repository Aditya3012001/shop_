import "./Cart.css";
import Modal from "../assets/Card/Modal";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
];
const Cart = () => {
  const cartitems = (
    <ul className="cart-items">
      {DUMMY_MEALS.map((meals) => {
        <li key={meals.id}>{meals.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartitems}
      <div className="total">
        <span>Total Amount</span>
        <span>40</span>
      </div>
      <div className="actions">
        <button className="button-alt">Close</button>
        <button className="button">Orderr</button>
      </div>
    </Modal>
  );
};

export default Cart;

// this should be rendered as an overlay using react portal
