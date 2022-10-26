import React, { useContext } from "react";
import { ShopContext } from "../../Store";

const Cart = () => {
  const { tallyUpCart, cart } = useContext(ShopContext);
  const total = tallyUpCart(cart);

  return <p>cart: {total.reduce((total, item) => total + item.count, 0)}</p>;
};

export default Cart;
