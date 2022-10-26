import React from "react";
import { withRouter, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#86ddf6", paddingTop: 12 };
  } else {
    return { color: "#ffffff", paddingTop: 12 };
  }
};

const Menu = withRouter(({ history }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Fake Shop
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon />
        </IconButton>
      </Link>
      <Link to="/category" style={{ textDecoration: "none" }}>
        <Button style={isActive(history, "/category")}>Category</Button>
      </Link>
      {!auth.isAuthenticated() && (
        <span>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button style={isActive(history, "/signup")}>Sign up</Button>
          </Link>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button style={isActive(history, "/signin")}>Sign in</Button>
          </Link>
        </span>
      )}
      {auth.isAuthenticated() && (
        <span>
          <Link to={"/product-list/" + auth.isAuthenticated().user._id}>
            <Button
              style={isActive(
                history,
                "/product-list/" + auth.isAuthenticated().user._id
              )}
            >
              Product List
            </Button>
          </Link>
          <Button
            color="inherit"
            style={{ paddingTop: 12 }}
            onClick={() => {
              auth.clearJWT(() => history.push("/"));
            }}
          >
            Sign out
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));

export default Menu;