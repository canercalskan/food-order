import React from "react";
import { Fragment, useContext } from "react";
import "./Header.css";
import CardContext from "../store/card-context";

const Header = (props) => {
  const cardCtx = useContext(CardContext);

  const numberOfCardItems = cardCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <div className="header-wrapper">
        <ul>
          <li>
            <h1>CalskanMeal</h1>
          </li>
          <li id="card-right">
            <button id={"card-btn"} onClick={props.onShowCard}>
              <h3>Your Card</h3>
              <div>{numberOfCardItems}</div>
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
