import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default class  Users extends Component {
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
                    ...
                </td>
                </tr>
                </tbody>
    
            
            ))}
            </table>   
            
        </div>
        </>
        )

    }

}