export const initialState = {
  products: [],
};
export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

const productsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      // localStorage.setItem("products", JSON.stringify(payload.products));
      return {
        ...state,
        products: payload.products,
      };
    case ACTIONS.REMOVE_FROM_CART:
      // localStorage.setItem("products", JSON.stringify(payload.products));
      return {
        ...state,
        products: payload.products,
      };
    default:
      throw new Error(`No case for type: ${type}`);
  }
};
export default productsReducer;
