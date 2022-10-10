import React, { useReducer, useState } from "react";
import Card from "../components/Card";
import useLocalStorage from "../hooks/useLocalStorage";
import { products } from "../mock/products";

const ACTIONS = {
  ADD_PRODUCT: "add-product",
  CHANGE_CART_STATE: "change-cart-state",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return [...state, action.item];
    case ACTIONS.CHANGE_CART_STATE:
      return products.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, inCart: !item.inCart };
        }
        return item;
      });
    default:
      throw new Error(`Unknown Action: ${action.type}`);
  }
};

const ProductsPage = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [inCart, setInCart] = useState();

  const handleClick = (product) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT, product });
    dispatch({ type: ACTIONS.CHANGE_CART_STATE, product });

    console.log(product);
    setCart((prevProduct) => {
      return [...prevProduct, product];
    });
  };
  return (
    <div className="container col-xxl-8 px-4 py-5 ">
      <h2 className="mb-5">Products</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-5">
              <Card
                imgUrl={product.img}
                cardTitle={product.title}
                cardDescription={product.description}
                handleClick={() => {
                  handleClick(product);
                }}
                inCart={inCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
