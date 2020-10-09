export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket

      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("can not delete !");
      }

      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
};

export default reducer;