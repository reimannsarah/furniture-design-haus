import React from "react";
import PropTypes from "prop-types";

function Cart(props) {

    let currentlyVisibleState = null;
      if (props.cart.length === 0){
       currentlyVisibleState =  <p>Your cart is empty, sire</p>
      } else {
      currentlyVisibleState= props.cart.map(item => 
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => props.deleteItem(item.id)}>Delete</button>
        <hr />
      </div>
      )}
    return (
    <React.Fragment>
      <h2>Cart</h2>
        {currentlyVisibleState}
    </React.Fragment>
  );
}

Cart.propTypes = {
  cart: PropTypes.array
}

export default Cart;