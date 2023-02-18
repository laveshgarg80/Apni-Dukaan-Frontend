import React from "react";
import { CartState } from "../context/Context";
import Card from "../components/cards";

function CartScreen() {
  const {
    state: { cart },
  } = CartState();

  return (
    <>
      {cart.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        <div className="products">
          {cart.map((element, index) => {
            return (
              <Card
                id={element.id}
                title={element.title}
                imageUrl={element.imageUrl}
                key={index}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default CartScreen;
