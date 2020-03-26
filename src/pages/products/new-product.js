import React, { useState } from 'react';
import api from '../../services/api';

export default function NewProducts() {
    const [name, setName] = useState('');
    const [preco, setPreco] = useState('');

    async function handleSubmit(event) {
        //console.log(event)
        //event.preventDefault();
        const data = {
            'name': name, 
            'preco': preco
        };
        

        await api.post('/api/product', data, {
            

        }).then(() => {
            window.location.href = '/products';
        });
        event.push('/products')
    }
    return (
        <div className="container">
        <form onSubmit = {handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Produto</label>
                <input
                    className="form-control" 
                    id="name"
                    placeholder="Nome do Produto"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="preco">Preço</label>
                <input
                    className="form-control" 
                    id="preco"
                    placeholder="Preço do Produto"
                    value={preco}
                    onChange={event => setPreco(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}