import React from "react";
import Card from "../components/Card";
import { products } from "../mock/products";

const ProductsPage = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5 ">
      <h2 className="mb-5">Products</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-5">
              <Card imgUrl={product.img} cardTitle={product.title} cardDescription={product.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
