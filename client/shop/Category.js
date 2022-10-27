import React, { useContext, useState } from "react";
import { ShopContext } from "../../Store";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { v4 } from "uuid";

const Category = () => {
    const { categories, selectedCategory, updateCategory } =
        useContext(ShopContext);
    const [ selected, setSelected ] = useState(false);

    const handleClick = (category) => {
        updateCategory(category);
        setSelected(true);
    };

    return (
        <>
            <div>
                <p>category</p>
            </div>
            <ul>
                {categories.map((category) => (
                    <li key={v4()}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleClick(category)}>
                        {category}
                    </li>
                ))}
            </ul>
            {selectedCategory && selected ? (
                <ProductList/>
            ) : (
                "please select a category"
            )}
        </>
    );
};

export default Category;
