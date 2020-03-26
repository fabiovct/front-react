import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import NewProducts from './pages/products/new-product';
import EditProducts from './pages/products/edit-product';
import Users from './pages/users';
import api from './services/api';


function isAuthenticated(){
  const response =  api.post('/validateToken' ,{

  });
    if(response.data != false){
        return true
    } else {
        return false
    }
}


export default function Routes() {
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
                <PrivateRoute path="/products" exact component={Products}/>
                <PrivateRoute path="/products/new" exact component={NewProducts}/>
                <PrivateRoute path="/products/:id" exact component={EditProducts}/>
                <PrivateRoute path="/users" exact component={Users}/>
            </Switch>
        </BrowserRouter>
    );
}