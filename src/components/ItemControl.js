import React from "react";
import NavBar from "./NavBar";
import Item from "./Item";
import ItemList from "./ItemList";
import Cart from "./Cart";
import allItems from "./store";
import { v4 } from "uuid";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailVisibleOnPage: false,
      visibleItemIndex: 0,
      cartVisibleOnPage: false,
    };
  }

  handleAddingToCart = (item) => {
    item.id = v4();
    const { dispatch } = this.props;
    const { id, name, src, description, price } = item;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      src: src,
      description: description,
      price: price
    }
    dispatch(action);
    this.setState({
      cartVisibleOnPage: true,
      detailVisibleOnPage: false
    });
  }

  handleCartClick = () => {
    this.setState({ cartVisibleOnPage: true });
  }

  handleDeleteFromCart = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
  }

  handleDetailClick = () => {
    this.setState({ detailVisibleOnPage: true });
  }

  handleReturnClick = () => {
    this.setState({
      detailVisibleOnPage: false,
      cartVisibleOnPage: false
    })
  }

  handleNextItemClick = () => {
    if (this.state.visibleItemIndex === allItems.length - 1) {
      this.setState({ visibleItemIndex: 0 })
    } else {
      this.setState(prevState => (
        { visibleItemIndex: prevState.visibleItemIndex + 1 }
      ))
    }
  }

  handlePrevItemClick = () => {
    if (this.state.visibleItemIndex === 0) {
      this.setState({ visibleItemIndex: allItems.length - 1 })
    } else {
      this.setState(prevState => (
        { visibleItemIndex: prevState.visibleItemIndex - 1 }
      ))
    }
  }

  render() {
    let currentlyVisibleState = null;
    let currentItem = allItems[this.state.visibleItemIndex]

    if (this.state.cartVisibleOnPage) {
      currentlyVisibleState =
        <React.Fragment>
          <Cart
            cart={this.props.cart}
            deleteItem={this.handleDeleteFromCart}
          />
        </React.Fragment>
    } else if (this.state.detailVisibleOnPage) {
      currentlyVisibleState =
        <div className="item-detail">
          <button className="x" onClick={this.handleReturnClick}>&#10554;</button>
          <Item
            name={currentItem.name}
            src={currentItem.src}
            description={currentItem.description}
            price={currentItem.price}
          />
          <button className="add-to-cart-btn" onClick={() => { this.handleAddingToCart(currentItem) }}>Add to Cart</button>
        </div>
    } else {
      currentlyVisibleState =
        <div className='items'>
          <button onClick={this.handlePrevItemClick}>&#10229;</button>
          <ItemList src={currentItem.src}
            showMeDetails={this.handleDetailClick}
            name={currentItem.name} />
          <button onClick={this.handleNextItemClick}>&#10230;</button>
        </div>
    }
    return (
      <React.Fragment>
        <NavBar onHomeClick={this.handleReturnClick} onCartClick={this.handleCartClick} />
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

ItemControl.propTypes = {
  cart: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cart: state
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;