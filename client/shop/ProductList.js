import React, { useContext } from "react";
import Product from "./Product";
import { ShopContext } from "../../Store";
import Cart from "./Cart";

const ProductList = () => {
  const { products, selectedCategory, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <>
      <p>{selectedCategory} product list</p>
      {!selectedCategory ? (
        <div>
          <p>please select a category</p>
        </div>
      ) : (
        <ul>
          {products.map((product) => {
            if (product.category === selectedCategory) {
              return (
                <li key={product.id} style={{ marginBottom: 15 }}>
                  <Product
                    product={product}
                    onAddToCart={addToCart}
                    onRemoveFromCart={removeFromCart}
                  />
                </li>
              );
            }
          })}
        </ul>
      )}
    </>
  );
};

export default ProductList;
