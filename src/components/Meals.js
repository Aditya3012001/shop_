import "./Meals.css";
import Card from "../assets/Card/Card";
import MealItem from "./MealItems/MealItem";
import { useEffect } from "react";
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
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const getList = async () => {
  let response = await fetch("http://localhost:8080/untitled/D");
  const list = await response.json();
  console.log(list, response);
};

const Meals = () => {
  useEffect(() => {
    getList();
  }, []);
  const meals = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.description}
      />
    );
  });

  return (
    <Card>
      <div className="meals">
        <ul>{meals}</ul>
      </div>
    </Card>
  );
};

export default Meals;
