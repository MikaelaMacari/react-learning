import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, cardTitle, cardDescription, handleClick, inCart }) => {
  return (
    <div className="card text-bg-dark h-100" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top h-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>

        {!inCart ? (
          <div className="d-flex justify-content-center">
            <button className="btn btn-light" onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <button className="btn btn-light" onClick={handleClick}>
              Remove from Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
