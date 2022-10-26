import React from "react";

const Product = ({ product, onAddToCart, onRemoveFromCart }) => {
  return (
    <div>
      <div>{product.title}</div>
      {/*<div>{product.price}</div>*/}
      {/*<div>{product.description}</div>*/}
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
      <button onClick={() => onRemoveFromCart(product)}>
        Remove from cart
      </button>
    </div>
  );
};

export default Product;
