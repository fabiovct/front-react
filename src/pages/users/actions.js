import { bindActionCreators } from "redux";

export function addToCart(user) {
    return{
    type:'ADD_USER',
    user,
};
}

export function removeFromCart(id) {
    return{
        
            type: 'REMOVE_FROM_CART', id
            

    };
}

export function updateAmount(id, amount) {
    console.log(amount)
    return {

        type: 'UPDATE_FROM_CART', id, amount
    }
}