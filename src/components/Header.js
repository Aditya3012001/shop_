import "./Header.css";
import mealimg from "../assets/meals.jpg";
import CartButton from "./CartButton";
const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>Reactmeals</h1>
        <CartButton onShow={props.onShow} onHide={props.onHide} />
      </header>
      <div className="main-image">
        <img src={mealimg} alt="your internet sucks" />
      </div>
    </>
  );
};
// do i have to pass it at 3 components
export default Header;
