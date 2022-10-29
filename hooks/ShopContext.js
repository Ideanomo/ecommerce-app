import React, { useContext, createContext, useState } from "react";
import { ShopContext } from "../Store";

export const useShop = () => useContext(ShopContext);
