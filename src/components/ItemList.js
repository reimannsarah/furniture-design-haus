import React from "react";

function ItemList(props) {
  return (
    <div>
      <img src={props.src} alt="here ya go" onClick={props.showMeDetails}/>
      <p>{props.name}</p>
    </div>
  )
}

export default ItemList;