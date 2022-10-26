import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./client/core/Home";
import Category from "./client/shop/Category";
import PrivateRoute from "./client/auth/PrivateRoute";
import Signup from "./client/user/Signup";
import Signin from "./client/auth/Signin";
import Menu from "./client/core/Menu";
import ProductList from "./client/shop/ProductList";
import { getCategory, getAllProducts } from "./client/shop/api-shop";
import Cart from "./client/shop/Cart";

const ShopContext = React.createContext({});

const Store = () => {
  const [categories, getCategories] = useState([]);
  const [products, getProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  const updateCategory = (category) => {
    setSelectedCategory(category);
    // console.log("current category is: ", category);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    let index = cart.findIndex((i) => i.id === product.id);
    if (index > -1) {
      setCart((cart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };

  const tallyUpCart = (cart) => {
    const groupedItems = cart.reduce((tally, product) => {
      tally[product.id] = tally[product.id] || {
        ...product,
        count: 0,
      };

      tally[product.id].count++;

      return tally;
    }, {});

    return Object.values(groupedItems);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getCategory(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        getCategories(data);
      }
    });
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getAllProducts(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        getProducts(data);
      }
    });
  }, []);

  const initContext = {
    categories,
    products,
    selectedCategory,
    updateCategory,
    addToCart,
    removeFromCart,
    cart,
    tallyUpCart,
  };

  return (
    <ShopContext.Provider value={initContext}>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/category" component={Category} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
      {/*<div>{cart.length} items</div>*/}
    </ShopContext.Provider>
  );
};

export { Store, ShopContext };
