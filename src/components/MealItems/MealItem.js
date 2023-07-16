import "./MealItem.css";
import "./MealForm";
import MealForm from "./MealForm";

const MealItem = (props) => {
  return (
    <li>
      <div className="meal">
        <h3>{props.name}</h3>
      </div>
      <div className="description">{props.description}</div>
      <div className="price">{props.price}</div>
      <MealForm />
    </li>
  );
};

export default MealItem;
