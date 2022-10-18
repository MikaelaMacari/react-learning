import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useProductsShop from "../utils/ProductsContext";

const Card = ({ cardProduct }) => {
  const { products, addProductToCart, removeProductFromCart } = useProductsShop();
  const [cart, setCart] = useLocalStorage("products");
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productIsInCart = products.find((productItem) => productItem.id === cardProduct.id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, cardProduct.id]);
  const handleClick = () => {
    if (isInCart) {
      removeProductFromCart(cardProduct);
      // setCart({
      //   ...cardProduct,
      //   inCart: false,
      // });
    } else {
      addProductToCart(cardProduct);
    }
  };

  return (
    <div className="card text-bg-dark h-100" style={{ width: "18rem" }}>
      <img src={cardProduct.img} className="card-img-top h-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cardProduct.title}</h5>
        <p className="card-text">{cardProduct.description}</p>
        <h5 className="card-text">${cardProduct.price}</h5>
        <div className="d-flex justify-content-center">
          <button className="btn btn-light" onClick={handleClick}>
            {!isInCart ? "Add to Cart" : "Remove from Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
