import { createContext, useContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import productsReducer, { ACTIONS, initialState } from "../store/productsReducer";

const ProductsContext = createContext(initialState);
export const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("products", []);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const addProductToCart = (product) => {
    product.inCart = true;
    const updatedCart = state.products.concat(product);
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: { products: updatedCart } });
    setCart(updatedCart);
  };

  const removeProductFromCart = (product) => {
    product.inCart = false;
    const updatedCart = state.products.filter((currentProduct) => currentProduct.id !== product.id);
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { products: updatedCart } });
    setCart(updatedCart);
  };

  const value = {
    cart: cart,
    setCart: setCart,
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
