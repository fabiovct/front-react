import React from 'react';
import {connect} from 'react-redux';

function Header({user}) {
    
            
    

    //console.log(user)
    //const id = user.id
    return (
        <>

        {user.map(user => (
        <div className="App" key={user.id}>
            
      <p>Usuários: {user.id}</p>
      <div className="content">
          </div>
            
          </div>
          ))}
          </>
          
    );
}

//export default connect()(Header);
export default connect(state => ({
user: state.users,

}))(Header);