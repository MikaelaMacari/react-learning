import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useLocalStorage from "../hooks/useLocalStorage";
import { productsData } from "../mock/products";

const ProductsPage = () => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [products, setProducts] = useState(
    productsData.map((product) => {
      return {
        ...product,
        inCart: cart.find((cartProduct) => cartProduct.id === product.id) ? true : false,
      };
    })
  );
  const addProductToCart = (selectedProduct) => {
    const newState = !selectedProduct.inCart ? true : false;
    setProducts(
      products.map((product) => {
        if (product.id === selectedProduct.id) {
          return {
            ...product,
            inCart: newState,
          };
        }

        return product;
      })
    );
  };

  useEffect(() => {
    setCart(products.filter((product) => product.inCart));
  }, [products]);
  return (
    <div className="container col-xxl-8 px-4 py-5 ">
      <h2 className="mb-5">Products</h2>
      <div className="row">
        {products &&
          products.map((product) => {
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
