import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {connect} from 'react-redux';

function Cart({cart}) {
    console.log(cart)
    return (

        <div className="container">
        <h4>Cart</h4>
        
        <table className="table">
        <thead>
            <tr>
            <th></th>
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            { cart.map(user => (
                    <tr>
                    <td></td>
            <td>{user.name}</td>
                    <td>{user.amount}</td>
            <td>{user.preco}</td>
                    <td></td>
                    </tr>

            ))}
        
        </tbody>
        </table>
            <p>Total:</p>
        </div>


    )
}
const mapStateToProps = state => ({
    cart: state.users
});

export default connect(mapStateToProps)(Cart);