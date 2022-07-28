import { useReducer } from "react";
import CardContext from "./card-context";

const defaultCardState = {
  items: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
        items : updatedItems,
        totalAmount : updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
  }
  return defaultCardState;
};

const CardProvider = (props) => {
  const [cardState, dispatchCardAction] = useReducer(
    cardReducer,
    defaultCardState
  );
  const addItemToCardHandler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };

  const removeItemFromCardHandler = (id) => {
    dispatchCardAction({ type: "REMOVE", id: id });
  };

  const cardContext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
