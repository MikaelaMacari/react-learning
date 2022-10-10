import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, cardTitle, cardDescription }) => {
  return (
    <div className="card text-bg-dark h-100" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top h-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <div className="d-flex justify-content-between">
          <Link to="/" className="btn btn-light">
            See Product
          </Link>
          <Link to="/" className="btn btn-light ms-3">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
