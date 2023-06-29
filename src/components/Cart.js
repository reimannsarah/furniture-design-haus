import React from "react";
import PropTypes from "prop-types";

function Cart(props) {
  return (
    <React.Fragment>
      <h2>Cart</h2>
      {props.cart.map(item => 
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => props.deleteItem(item.id)}>Delete</button>
        <hr />
      </div>
      )}
    </React.Fragment>
  );
}

Cart.propTypes = {
  cart: PropTypes.array
}

export default Cart;