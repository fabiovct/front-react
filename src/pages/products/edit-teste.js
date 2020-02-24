import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function EditProducts1() {
    class EditProducts extends React.Component {
        constructor(props){
            super(props)
            this.state = { 
                id: this.props.match.params.id,
            }
            //this.handleSubmit = this.handleSubmit.bind(this)
            //this.InputChangeHandler = this.InputChangeHandler.bind(this)
            console.log(this.props.match.params.id)
    }
}
    //const [name, setName] = useState('');
    //const [preco, setPreco] = useState('');
    const [name, setName] = useState([]);
    const [preco, setPreco] = useState([]);
    const [products, setProduct] = useState([]);
    //const id = window.location.href.split("/")[4];
    const {handle} = this.props.match.params
    //console.log(s.split("/"))
    constructor(props){
    super(props)
    this.state = { 
        id: this.props.match.params.id,
    }
}
    console.log(this.props)
    const par = 
    console.log({handle})

    useEffect(() => {
        //routes.get('/id/:id', function (req, res){
        
        async function loadProduct() {
            const response = await api.get('/id/'+id, {
            });
            console.log(response.data)
            setProduct(response.data.data)
        }
        loadProduct();
        
    },
    []
    );

    async function handleSubmit(event) {
        console.log(event)
        event.preventDefault();
    const data = {
            'name': name, 
            'preco': preco
        };
    }
        

        //await api.post('/product/create', data, {
            

        //}).then(() => {
           // window.location.href = '/products';
        //});
       // event.push('/products')
    //}
    
    return (
        
        <div className="container">
        {products.map(product => (
            
        <form onSubmit = {handleSubmit}>
        
            <div className="form-group">
            <label htmlFor="name">Produto</label>
            <input
            className="form-control" 
            id="name"
            placeholder="Nome do Produto"
            value={product.name}
            onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
            className="form-control" 
            id="preco"
            placeholder="Preço do Produto"
            value={product.preco}
            onChange={event => setPreco(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
        ))}
        </div>
        
        )
        
}



/* import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

class EditProducts extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            id: this.props.match.params.id,
        }
        //this.handleSubmit = this.handleSubmit.bind(this)
        //this.InputChangeHandler = this.InputChangeHandler.bind(this)
        console.log(this.props.match.params.id)
        //this.EditProducts1();
        const [name, setName] = useState([]);
    const [preco, setPreco] = useState([]);
    const [products, setProduct] = useState([]);

        useEffect(() => {
            
            //routes.get('/id/:id', function (req, res){
            
            async function loadProduct() {
                const response = await api.get('/id/'+this.props.match.params.id, {
                });
                console.log(response.data)
                setProduct(response.data.data)
            }
            loadProduct();
            
        },
        []
        );
    }
    
    
EditProducts1() {
    //const [name, setName] = useState('');
    //const [preco, setPreco] = useState('');
    const [name, setName] = useState([]);
    const [preco, setPreco] = useState([]);
    const [products, setProduct] = useState([]);
    //const id = window.location.href.split("/")[4];
    //const {handle} = this.props.match.params
    //console.log(s.split("/"))
    //console.log(id)
    //const par = 
    //console.log({handle})

    useEffect(() => {
        //routes.get('/id/:id', function (req, res){
        
        async function loadProduct() {
            const response = await api.get('/id/'+this.props.match.params.id, {
            });
            console.log(response.data)
            setProduct(response.data.data)
        }
        loadProduct();
        
    },
    []
    );

    async function handleSubmit(event) {
        console.log(event)
        event.preventDefault();
    const data = {
            'name': name, 
            'preco': preco
        };
    }
        

        //await api.post('/product/create', data, {
            

        //}).then(() => {
           // window.location.href = '/products';
        //});
       // event.push('/products')
    //}
    return (
        
        <div className="container">
        {products.map(product => (
            
        <form onSubmit = {handleSubmit}>
        
            <div className="form-group">
            <label htmlFor="name">Produto</label>
            <input
            className="form-control" 
            id="name"
            placeholder="Nome do Produto"
            value={product.name}
            onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
            className="form-control" 
            id="preco"
            placeholder="Preço do Produto"
            value={product.preco}
            onChange={event => setPreco(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
        ))}
        </div>
        
        )
        
}
}
export default EditProducts*/