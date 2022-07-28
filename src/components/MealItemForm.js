import React, { useRef, useState } from "react";
import "./MealItemForm.css";
const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);
  const [mealList, setMealList] = useState([]);

  const amountChangeHandler = (event) => {
    if (event.target.value <= 0) setAmount(0);
    else setAmount(event.target.value);
  };

  const [inputValidated , setInputValidated] = useState(true);

  const amountInputRef = useRef();

  const addMeal = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    //console.log(enteredAmount);
    const enteredAmountNumber = +enteredAmount; // + sign converts string to number.
    if(enteredAmount.trim() === 0 || enteredAmount < 1) {
      setInputValidated(false);
      return;
    }
    else {
      setInputValidated(true);
    }
    const addedItem = {
      name:props.name,
      price:props.price,
      amount:enteredAmountNumber,
      id: Math.random() * 100,
    };
    props.onSave(addedItem);

     setAmount(0);
  };

  return (
    <form onSubmit={addMeal}>
      {!inputValidated ? <p>Amount should be more than 0</p> : <label htmlFor="amount">Amount</label>}
      <input
        ref={amountInputRef}
        type={"number"}
        id="amount"
        inputMode="numeric"
        value={amount}
        onChange={amountChangeHandler}
      ></input>
      <button type="submit">+ Add </button>
    </form>
  );
};
export default MealItemForm;
