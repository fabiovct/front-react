import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import NewProducts from './pages/products/new-product';
import EditProducts from './pages/products/edit-product';


function isAuthenticated(){
    if(sessionStorage.status === 'true'){
        return true
    } else {
        return false
    }
}

export default function Routes() {
    console.log(sessionStorage.status)
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={props =>
            isAuthenticated() ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
          }
        />
      );

    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>    
                <Route path="/products" exact component={Products}/>
                <PrivateRoute path="/products/new" exact component={NewProducts}/>
                <Route path="/products/:id" exact component={EditProducts}/>
            </Switch>
        </BrowserRouter>
    );
}