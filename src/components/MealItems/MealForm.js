import "./MealForm.css";
import Input from "./Input";

const MealForm = (props) => {
  return (
    <form className="form">
      <Input />
      <button>+Add</button>
    </form>
  );
};

export default MealForm;
