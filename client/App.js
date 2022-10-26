import React from "react";
import { Store } from "../Store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { hot } from "react-hot-loader";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Store />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(App);
