import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
    
    
export default function EditProducts(req) {
    var [name, setName] = useState('');
    var [preco, setPreco] = useState('');
    const [products, setProduct] = useState([]);
    const id = req.match.params['id'];
    //this.input = React.createRef();
    let inputName = React.createRef();
    let inputPreco = React.createRef();
    products.map(products => (
        console.log(products)
    ))
    

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

    async function handleSubmit(event, a, b) {
        //console.log(event.name)
        //console.log(event.preventDefault())
        console.log(inputName.current.value)
        event.preventDefault();
        //console.log(a)
        //console.log(b)
        
    const data = {
            'id': id,
            'name': inputName.current.value, 
            'preco': inputPreco.current.value
        };
        console.log(data)
        //if(data.name == ''){
            
        //}
    
        await api.put('/product/edit', data, {
            
        
        }).then(() => {
            window.location.href = '/products';
        });
        event.push('/products')
    }

    //products.map(product => (
        //name1 = product.name,
        //console.log(name1)
        
   // ))
   //onSubmit = {handleSubmit}
        
    return (
        
        <div className="container">
        {products.map(product => (
            
        <form  key={id}>
        
            <div className="form-group">
            <label htmlFor="name">Produto</label>
            <input
            type = "text"
            className="form-control" 
            id="name"
            ref={inputName}
            defaultValue={product.name}
            onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
            className="form-control" 
            id="preco"
            ref={inputPreco}
            defaultValue={product.preco}
            onChange={event => setPreco(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event,  product.preco, product.name)}>Submit</button>
            
        </form>
        ))}
        </div>
        
        )
    }



