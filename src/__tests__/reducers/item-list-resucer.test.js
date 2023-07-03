import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;
  const itemData = {
    name: 'scorcher',
    src: 'picture',
    description: 'a hot bench',
    price: '$456',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new item data to mainItemList', () => {
    const { name, src, description, price, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      src: src,
      description: description,
      price: price,
      id: id
    };
    expect(itemListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        src: src,
        description: description,
        price: price,
        id: id
      }
    });
  });
});