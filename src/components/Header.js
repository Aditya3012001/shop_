import "./Header.css";
import mealimg from "../assets/meals.jpg";
import CartButton from "./CartButton";
const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Reactmeals</h1>
        <CartButton />
      </header>
      <div className="main-image">
        <img src={mealimg} alt="your internet sucks" />
      </div>
    </>
  );
};

export default Header;
