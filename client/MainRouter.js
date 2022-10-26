import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Category from './shop/Category';
import PrivateRoute from './auth/PrivateRoute';
import Signup from './user/Signup';
import Signin from "./auth/Signin";
import Menu from './core/Menu';


const MainRouter = () => {
    return (<div>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <PrivateRoute path="/category" component={Category}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
        </Switch>
    </div>)
}

export default MainRouter;