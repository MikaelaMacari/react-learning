export const initialState = {
  total: 0,
  products: [],
};
export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_PRICE: "UPDATE_PRICE",
};
const productsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      console.log(ACTIONS.ADD_TO_CART, payload);
      return {
        ...state,
        products: payload.products,
      };
    case ACTIONS.REMOVE_FROM_CART:
      console.log(ACTIONS.REMOVE_FROM_CART, payload);
      return {
        ...state,
        products: payload.products,
      };
    case ACTIONS.UPDATE_PRICE:
      console.log(ACTIONS.UPDATE_PRICE, payload);
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No case for type: ${type}`);
  }
};
export default productsReducer;
