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
    default:
      return state;
  }
};

export default reducer;