import React from "react";
import { CartState } from "../context/Context";

function Card({ id, title, imageUrl }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {cart.some((p) => p.id === id) ? (
          <a
            className="btn btn-danger"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: {
                  id: id,
                  title: title,
                  imageUrl: imageUrl,
                },
              });
            }}
          >
            Remove From Cart
          </a>
        ) : (
          <a
            className="btn btn-primary"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: {
                  id: id,
                  title: title,
                  imageUrl: imageUrl,
                },
              });
            }}
          >
            Add to Cart
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
