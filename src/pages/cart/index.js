import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {connect} from 'react-redux';
import * as CartActions from '../users/actions';
import formatCurrencyToBr from '../../../node_modules/format-currency-to-br';

function Cart({cart, dispatch, total}) {
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
            <th>Total</th>
            <th>Operação</th>
            </tr>
        </thead>
        <tbody>
            { cart.map(user => (
                    <tr key={user.id}>
                    <td></td>
            <td>{user.name}</td>
                    <td>{user.amount}</td>
            <td>{formatCurrencyToBr(user.preco)}</td>
            <td>{user.totalUnit}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => dispatch
                            (CartActions.removeFromCart(user.id))}>Remover Produto
                        </button>
                        <button className="btn btn-primary ml-2" onClick={() => dispatch (CartActions.updateAmount(user.id, user.amount + 1 ))}>+1
                        </button>
                        <button className="btn btn-primary ml-2" onClick={() => dispatch (CartActions.updateAmount(user.id, user.amount - 1 ))}>-1
                        </button>
                            
                            
                            </td>
                    </tr>

            ))}
        
        </tbody>
        </table>
                        <p>Total:{formatCurrencyToBr(total)}</p>
        </div>


    )
}
const mapStateToProps = state => ({
    cart: state.users.map(user => ({
        ...user,
        totalUnit: formatCurrencyToBr((parseFloat(user.preco)*(parseInt(user.amount)))),
    })),
    total: state.users.reduce((total, user) => {
        return total + parseFloat(user.preco) * parseFloat(user.amount)

    }, 0)
});

export default connect(mapStateToProps)(Cart);