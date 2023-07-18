import "./MealItem.css";
import "./MealForm";
import MealForm from "./MealForm";
import { useContext } from "react";
import cartContext from "../../store/Cart-Context";

// handle meal form submission here using context

const MealItem = (props) => {
  const cartctx = useContext(cartContext);
  const mealData = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    };
    cartctx.addItem(item);
  };
  return (
    <li>
      <div className="meal">
        <h3>{props.name}</h3>
      </div>
      <div className="description">{props.description}</div>
      <div className="price">{props.price}</div>
      <MealForm mealdata={mealData} />
    </li>
  );
};

export default MealItem;

// one post request handler and some database queries to done in backend
