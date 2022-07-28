import React , {useContext}from "react";
import "./AvailableMeals.css";
import MealItemForm from "./MealItemForm";
import CardContext from "../store/card-context";

const AvailableMeals = (props) => {
  const cardCtx = useContext(CardContext);

  const handleCardSave = (item) => {
    //props.onSave(item)
    cardCtx.addItem({
      id: item.id,
      key: item.id,
      name: item.name,
      amount: item.amount,
      price: item.price,
    });
    cardCtx.totalAmount += item.amount * item.price;
    console.log(cardCtx.items)
  }

  const mealsList = [
    { name: "Schnitzel", description : 'Finest chicken and grill', price: "199.99" },
    { name: "Barbecue Burger", description : 'American style barbecue burger', price: "179.99" },
    { name: "Green Bowl", description : 'American style barbecue burger',price: "200" },
    { name: "Sushi", description : 'American style barbecue burger', price: "74.99" },
    { name: "Kebab",description : 'American style barbecue burger',  price: "199.99" },
    { name: "Vodka", description : 'American style barbecue burger', price: "179.99" },
    { name: "Raki", description : 'American style barbecue burger', price: "200" },
    { name: "Baklava", description : 'American style barbecue burger', price: "179" },
    { name: "Kemalpaşa",description : 'American style barbecue burger',  price: "200" },
    { name: "Antrikot", description : 'American style barbecue burger', price: "179" },
    { name: "Burger", description : 'American style barbecue burger', price: "200" },
    { name: "Antrikot", description : 'American style barbecue burger', price: "179" },
  ];

  return (
    <ol id="availableList">
      {mealsList.map((meal) => {
        return (
          <li className="availableListItem">
           <b>{meal.name}</b><br /> <i> {meal.description}</i> <br/> <b className="meal-price">{'$' + meal.price}</b>
           <MealItemForm price={meal.price} name= {meal.name} amount = {meal.amount} id = {meal.id} onSave = {handleCardSave}/>
            <hr></hr>
          </li>
        );
      })}
    </ol>
  );
};
export default AvailableMeals;
