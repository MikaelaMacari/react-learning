import React, { useCallback } from "react";
import useProductsShop from "../utils/ProductsContext";

const Card = ({ cardProduct, products, setProducts }) => {
  const { cart, addProductToCart, removeProductFromCart } = useProductsShop();
  // const [cart, setCart] = useLocalStorage("products");
  // const [isInCart, setIsInCart] = useState(false);
  const changeProductState = useCallback(
    (newState) => {
      setProducts(
        products.map((product) => {
          if (product.id === cardProduct.id) {
            return {
              ...product,
              inCart: newState,
            };
          }
          return product;
        })
      );
    },
    [cart, cardProduct.id, cardProduct.inCart, products]
  );

  // useEffect(() => {
  //   const productIsInCart = cart?.find((productItem) => productItem.id === cardProduct.id);
  //   if (productIsInCart) {
  //     // changeProductState(true);
  //   } else {
  //     // changeProductState(false);
  //   }
  // }, [cart, cardProduct.id]);
  const handleClick = () => {
    console.log(cardProduct);
    if (cardProduct.inCart) {
      removeProductFromCart(cardProduct);
      // changeProductState(false);
    } else {
      addProductToCart(cardProduct);
      // changeProductState(true);
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
            {!cardProduct.inCart ? "Add to Cart" : "Remove from Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
