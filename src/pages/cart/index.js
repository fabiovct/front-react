import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {connect} from 'react-redux';
import * as CartActions from '../users/actions'

function Cart({cart, dispatch}) {
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
                    <td>
                        <button className="btn btn-primary" onClick={() => dispatch
                            (CartActions.removeFromCart(user.id))}>Remover Produto
                        </button>
                        <button className="btn btn-primary" onClick={() => dispatch (CartActions.updateAmount(user.id, user.amount + 1 ))}>+1
                        </button>
                        <button className="btn btn-primary" onClick={() => dispatch (CartActions.updateAmount(user.id, user.amount - 1 ))}>-1
                        </button>
                            
                            
                            </td>
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