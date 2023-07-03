const reducer = (state = {}, action) => {
  const { name, src, description, price, id } = action;
  switch(action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          src: src,
          description: description,
          price: price,
          id: id
        }
      });
    case 'DELETE_ITEM':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;