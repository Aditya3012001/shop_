import "./MealForm.css";
import Input from "./Input";
import { useRef } from "react";

const MealForm = (props) => {
  const amount = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.mealdata(+amount.current.value);
  };

  // cart should also get updated. and also the modal

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input ref={amount} />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealForm;
