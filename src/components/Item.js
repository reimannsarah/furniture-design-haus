import React from "react";
import PropTypes from 'prop-types';

function Item(props){
  return <div className="item-detail">
    <img src={props.src} alt="item detail"/>
    <p className="item-detail-name">{props.name}</p>
    <p>{props.description}</p>
    <p>{props.price}</p>
  </div>
}

Item.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
}

export default Item;