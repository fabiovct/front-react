import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        console.log(event)
        event.preventDefault();
        const data = {
            'email': email,
            'password': password
        };

       const response =  await api.post('/auth', data, {

        });
        if(response.data[0].status !== 'failed'){
            sessionStorage.setItem('status',response.data[0].status)
            window.location.href = '/products';
        }
        
        



        /*async function loadProducts() {
            const response = await api.get('/product', {
            });
            setProducts(response.data.data)
        }
        loadProducts();*/
        
    }
    return (
        <div className="container">
            <form onSubmit = {loginUser}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    className="form-control" 
                    id="email"
                    placeholder="email@email.com.br"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input
                    className="form-control" 
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}