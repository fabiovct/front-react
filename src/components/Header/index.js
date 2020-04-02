import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

function Header({user}) {
    
            
    

    console.log(user)
    //const id = user.id
    if(user.length > 0){
    return (
        <Link to="cart">
    <p>Produtos:{user.length}</p>
    </Link>
    );
} else {
    return (
        <p>TESTE</p>
        );
}

}

//export default connect()(Header);
export default connect(state => ({
user: state.users,

}))(Header);