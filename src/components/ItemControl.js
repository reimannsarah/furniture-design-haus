import React from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import allItems from "./store";


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailVisibleOnPage: false,
      cart: [],
      visibleItemIndex: 0
    };
  }

  handleAddingToCart = (item) => {
    const newCartItem = this.state.cart.concat(item);
    this.setState({ cart: newCartItem })
  }

  handleDetailClick = () => {
    this.setState(prevState => ({
      detailVisibleOnPage: !prevState.detailVisibleOnPage
    }));
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
    if (this.state.detailVisibleOnPage) {
      currentlyVisibleState = 
      <div className="item-detail">
        <button className="x" onClick={this.handleDetailClick}>&#10554;</button>
        <Item
          name={currentItem.name}
          src={currentItem.src}
          description={currentItem.description}
          price={currentItem.price}
        />
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
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default ItemControl;