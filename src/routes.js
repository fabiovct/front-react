import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './pages/products';
import NewProducts from './pages/products/new-product';


export default function Routes() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/products" exact component={Products}/>
                <Route path="/products/new" exact component={NewProducts}/>
            </Switch>
        </BrowserRouter>
    );
}