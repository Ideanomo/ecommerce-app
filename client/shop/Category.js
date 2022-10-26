import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

function Category() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((json) => {
        // Save post into state
        setProducts(json);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <h1>Category</h1>
      <p>Welcome, please select a category</p>
      <ul>
        {category.map((item, i) => (
          <li key={v4()}>{category[i]}</li>
        ))}
      </ul>
      {/*            <h1>Product List</h1>
            <ul>
                         {products.filter(product => product.category === 'jewelery').map((post) => (
          <li key={post.id}>{post.category}</li>
        ))}

                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>*/}
    </>
  );
}

export default Category;
