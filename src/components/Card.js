import React, { useContext } from "react";
import "./card.css";
import Modal from "./Modal";
import CardContext from "../store/card-context";

const Card = (props) => {
  const cardCtx = useContext(CardContext);
  const cardItems = (
    <ul className="'card-items">
      {cardCtx.items.map((item) => (
        <li className="card-items-list-item"id="card-li">{item.amount + 'x ' + item.name} <p>{'$'+item.price * item.amount}</p><hr></hr></li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <div className="shopping-card">
      {cardItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{'$'+cardCtx.totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" id="close-card-btn" onClick={props.onHideCard}>Close</button>
          <button className="button" onClick={props.onOrder}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Card;
