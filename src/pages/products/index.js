import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
//import './styles.css';

export default function Products() {

    function deleteProduct(id) {
        api.delete('/api/product', { data: { id: id }})
           .then((result) => {
            //    const data = result.data.data
               //this.props.toggle()
               window.location.reload()
        })

    };

    
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        async function loadProducts() {
            const response = await api.get('/api/product', {
            });
            if(response.data === false) {
               window.location.href = '/';
            }
            setProducts(response.data)
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
                    <Link to={'products/'+product.id}>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    </Link>
                    <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteProduct(product.id)}>Excluir</button>
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