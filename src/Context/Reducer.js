export const initialState = {
  basket: [],
  user: null,
  drawer: false,
};

/**
 *
 * @param {*} basket
 * @returns Calculates the total item in basket and then returns the components to checkout page
 */

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

/**
 *
 * @param {*} state
 * @param {*} action
 * @returns cases which are used to perform various actions on the different parts of the page.
 */

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cannot remove product. Not in cart");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_DRAWER":
      return {
        ...state,
        drawer: action.toggle,
      };
    default:
      return state;
  }
};

export default reducer;
