import React, { useEffect, useState} from 'react';
import api from '../../services/api';
    
export default function EditProducts(req) {
    var [name, setName] = useState('');
    var [preco, setPreco] = useState('');
    const [products, setProduct] = useState([]);
    const id = req.match.params['id'];
    let inputName = React.createRef();
    let inputPreco = React.createRef();
    
    useEffect(() => {
        async function loadProduct() {
            const response = await api.get('api/product/'+id, {
            });
            setProduct(response.data)
        }
        loadProduct();
    },

    );

    async function handleSubmit(event, a, b) {
        event.preventDefault();
        
    const data = {
            'id': id,
            'name': inputName.current.value, 
            'preco': inputPreco.current.value
        };

        await api.put('/api/product', data, {
        }).then(() => {
            window.location.href = '/products';
        });
        event.push('/products')
    }
        
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



