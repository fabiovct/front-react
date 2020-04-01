import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {connect} from 'react-redux';

 class  Users extends Component {
    state = {
        users: [],
    };

    async componentDidMount() {
        const response = await api.get('/api/listUsers', {
        });
        if(response.data === false) {
            window.location.href = '/';
         }

        this.setState({users: response.data});
    }

    handleAddUser = user => {
        const {dispatch} = this.props;
        dispatch({
            type:'ADD_USER',
            user,
        });
    };

    render() {
        const {users} = this.state;

        return (
            <>
        
        <div className="container">
        <h4>Users</h4>
        
        <table className="table">
        <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Operação</th>
                </tr>
        </thead>
            {users.map(user => (
                    
                <tbody key={user.id}>
                <tr>
            <th>{user.id}</th>
                <td>{user.name}</td>
                <td>
                    <button 
                    className="btn btn-primary" 
                    type="button" 
                    onClick={()=>this.handleAddUser(user)}
                    >Adcionar
                    </button>
                </td>
                </tr>
                </tbody>
    
            
            ))}
            </table>

            <Link to="products">
            <button className="btn btn-success btn-sm">Voltar</button>
            </Link>   
            
        </div>
        </>
        )


    }

}

export default connect()(Users);


