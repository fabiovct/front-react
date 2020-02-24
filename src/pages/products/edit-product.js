import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
    
    
export default function EditProducts(req) {
    var [name, setName] = useState('');
    var [preco, setPreco] = useState('');
    const [products, setProduct] = useState([]);
    const id = req.match.params['id']
    //var name1 = ""
    

    useEffect(() => {
        async function loadProduct() {
            const response = await api.get('/id/'+id, {
            });
            //console.log(response.data)
            setProduct(response.data.data)
        }
        loadProduct();
        
    },
    []
    );

    async function handleSubmit(event) {
        console.log(event.name)
        //console.log(event.preventDefault())
        //event.preventDefault();
    const data = {
            'id': id,
            'name': name, 
            'preco': preco
        };
        console.log(data)
        await api.put('/product/edit', data, {
            
            

        }).then(() => {
            window.location.href = '/products';
        });
        //event.push('/products')
    }

    //products.map(product => (
        //name1 = product.name,
        //console.log(name1)
        
   // ))
        
    return (
        
        <div className="container">
        {products.map(product => (
            
        <form onSubmit = {handleSubmit} key={id}>
        
            <div className="form-group">
            <label htmlFor="name">Produto</label>
            <input
            type = "text"
            className="form-control" 
            id="name"
            
            defaultValue={product.name}
            onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
            className="form-control" 
            id="preco"
            placeholder="Preço do Produto"
            defaultValue={product.preco}
            onChange={event => setPreco(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
        ))}
        </div>
        
        )
    }



