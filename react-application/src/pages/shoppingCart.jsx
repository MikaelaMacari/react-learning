import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ShoppingCartPage = () => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const productPrices = cart.map((item) => item.price);
  const totalPrice = productPrices.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const removeFromCart = (cartItemId, newState) => {
    setCart(cart.filter((product) => product.id !== cartItemId));
  };
  return (
    <div className="container col-xxl-8 px-4 py-5 ">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">{!!totalPrice ? "Your cart" : "Your cart is empty"}</span>
        {!!totalPrice && <span className="badge bg-primary rounded-pill">{cart.length}</span>}
      </h4>
      <ul className="list-group mb-3">
        {cart &&
          cart.map((cartItem) => {
            return (
              <li key={cartItem.id} className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{cartItem.title}</h6>
                  <small className="text-muted">{cartItem.description}</small>
                  <button
                    className="btn btn-dark d-flex mt-2"
                    onClick={() => {
                      removeFromCart(cartItem.id, false);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
                <span className="text-muted">${cartItem.price}</span>
              </li>
            );
          })}
        {!!totalPrice && (
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${totalPrice}</strong>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ShoppingCartPage;
