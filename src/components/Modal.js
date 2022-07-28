import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
  <div className={"modal"}>
    <div className={'content'}> {props.children} </div>
  </div>
  )
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

   portalElement.style.paddingTop = "6em";
  portalElement.style.display = "none";
  portalElement.style.transition = "all 1s";

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
