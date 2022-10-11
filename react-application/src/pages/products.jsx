import React, { useState } from "react";
import Card from "../components/Card";
import useLocalStorage from "../hooks/useLocalStorage";
import { products } from "../mock/products";

const ProductsPage = () => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [inCart, setInCart] = useState(false);

  const addProductToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
      product.inCart = false;
      console.log("Cart", cart);
      console.log("incart", inCart);
      setCart((prevProduct) => {
        // const prevIndex = prevProduct.findIndex((item) => item.id === product.id);
        // prevProduct.splice(prevIndex, 1);
        // console.log("Prev", prevProduct);
        return prevProduct;
      });
    } else {
      product.inCart = true;
      setCart((prevProduct) => {
        return [...prevProduct, product];
      });
    }
    console.log("Product", product);
  };

  // const itemInCart = (id) => {
  //   return cart.some((item) => item.id === id);
  // };
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
                cartPrice={product.price}
                handleClick={() => {
                  addProductToCart(product);
                }}
                inCart={product.inCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
