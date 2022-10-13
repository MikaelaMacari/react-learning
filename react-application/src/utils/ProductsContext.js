import { createContext, useContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import productsReducer, { ACTIONS, initialState } from "../store/productsReducer";

const ProductsContext = createContext(initialState);
export const ProductsProvider = ({ children }) => {
  // const [cart, setCart] = useLocalStorage("products", []);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const addProductToCart = (product) => {
    const updatedCart = state.products.concat(product);
    // setCart(updatedCart);
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: { products: updatedCart } });
    // console.log("CART", cart);
  };

  const removeProductFromCart = (product) => {
    const updatedCart = state.products.filter((currentProduct) => currentProduct.id !== product.id);
    // setCart(updatedCart);
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { products: updatedCart } });
  };

  const value = {
    total: state.total,
    products: state.products,
    addProductToCart,
    removeProductFromCart,
  };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
const useProductsShop = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProductsShop must be used within ProductsContext");
  }
  return context;
};
export default useProductsShop;
