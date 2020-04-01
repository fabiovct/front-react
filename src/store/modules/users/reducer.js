export default function users(state=[], action){
    console.log(state)
    switch (action.type){
        case 'ADD_USER':
            return [ ...state, action.user];

        default:
            return state;

    }
}