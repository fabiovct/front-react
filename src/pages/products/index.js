import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
//import './styles.css';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/product', {
            });
            //setProducts(response.data)
            console.log(response.data.data)
            setProducts(response.data.data)
        }
        loadProducts();
    },
    []
    );
    return (
        <>
        
        <div className="container">
        <h4>Products</h4>
        
        <table className="table">
        <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Operação</th>
                </tr>
        </thead>
            {products.map(product => (
                    
                <tbody key={product.id}>
                <tr>
            <th>{product.id}</th>
                <td>{product.name}</td>
                <td>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    <button className="btn btn-danger btn-sm ml-2">Excluir</button>
                </td>
                </tr>
                </tbody>
    
            
            ))}
            </table>
            <Link to="products/new">
            <button className="btn btn-success btn-sm">Novo Produto</button>
            </Link>
            
            
        </div>
        </>
    )
}