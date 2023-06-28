import React from "react";
import Item from "./Item";
import ItemList from "./ItemList";

const allItems = [
  {
    name: 'trundle',
    src: './img/trundle',
    description: 'a trundle',
    price: '$5,099'
  },
  {
    name: 'bag',
    src: './img/bag',
    description: 'a bag',
    price: '$3,079'
  },
  {
    name: 'toilet',
    src: './img/toilet',
    description: 'a toilet',
    price: '$9,025'
  }
]

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
    let buttonText = null;
    let currentItem = allItems[this.state.visibleItemIndex]
    if (this.state.detailVisibleOnPage) {
      currentlyVisibleState = <Item
        name={currentItem.name}
        src={currentItem.src}
        description={currentItem.description}
        price={currentItem.price}
      />
      buttonText = "X"
    } else {
      currentlyVisibleState =
        <React.Fragment>
          <ItemList src={currentItem.src}
            name={currentItem.name} />
          <button onClick={this.handleNextItemClick}>Next</button>
          <button onClick={this.handlePrevItemClick}>Last</button>
        </React.Fragment>
      buttonText = "Zoinks!"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleDetailClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default ItemControl;