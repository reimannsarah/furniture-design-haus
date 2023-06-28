import React from "react";
import { v4 } from 'uuid';
import Item from "./Item";

function ItemList(props) {
  return (
    <React.Fragment>
      <img src={props.src} alt="here ya go" />
      <p>{props.name}</p>
    </React.Fragment>
  )
}

export default ItemList;