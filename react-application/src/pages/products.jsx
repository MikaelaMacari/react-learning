import React, { useState } from "react";
import Card from "../components/Card";
import { productsData } from "../mock/products";
import useProductsShop from "../utils/ProductsContext";

const ProductsPage = () => {
  const { cart } = useProductsShop();
  const [products, setProducts] = useState(
    productsData.map((product) => {
      return {
        ...product,
        inCart: cart.find((cartProduct) => cartProduct.id === product.id) ? true : false,
      };
    })
  );

  return (
    <div className="container col-xxl-8 px-4 py-5 ">
      <h2 className="mb-5">Products</h2>
      <div className="row">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-5">
                <Card cardProduct={product} products={products} setProducts={setProducts} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
