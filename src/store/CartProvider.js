import { act } from "react-dom/test-utils";
import cartContext from "./Cart-Context";
import { useReducer } from "react";

// will use usereducer here to manage a bit complex state

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // here we have to return the new state snapshot

  if (action.type === "ADD") {
    const newItems = state.items.concat(action.item);
    const newTotal = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newItems,
      totalAmount: newTotal,
    };
  }

  if (action.type === "REMOVE") {
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispacthAction] = useReducer(cartReducer, defaultState);
  // dispatch function is called with action object
  const additem = (item) => {
    const action = {
      type: "ADD",
      item: item,
    };

    dispacthAction(action);
  };

  const removeitem = (id) => {
    const action = {
      type: "REMOVE",
      id: id,
    };
    dispacthAction(action);
  };

  const cartC = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: additem,
    removeItem: removeitem,
  };
  return (
    <cartContext.Provider value={cartC}>{props.children}</cartContext.Provider>
  );
};

export default CartProvider;
// role of this comp
