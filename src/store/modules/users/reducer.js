import produce from 'immer';

export default function users(state=[], action){
    switch (action.type){
        case 'ADD_USER':
            return produce(state, draft =>{
                const userIndex = draft.findIndex(p=> p.id === action.user.id)
                if(userIndex > 0 || userIndex === 0 ){
                    draft[userIndex].amount +=1;
                }else {
                    draft.push({
                        ...action.user,
                        amount: 1
                    });
                }
                
            });

            case 'REMOVE_FROM_CART':
                return produce(state, draft =>{
                    const userIndex = draft.findIndex(p=> p.id === action.id)
                    if(userIndex > 0 || userIndex === 0 ){
                        draft.splice(userIndex, 1);
                    }
                    
                });

                case 'UPDATE_FROM_CART':
                    console.log('ok')
                    //{
                   // if(action.amount > 0 || action.amount === 0 ){
                       // console.log(action.amount)
                       // return state;
                    //}
                return produce(state, draft =>{
                    const userIndex = draft.findIndex(p=> p.id === action.id)
                    if(userIndex > 0 || userIndex === 0 ){
                        console.log(action.amount)
                        draft[userIndex].amount = Number(action.amount);
                    }
                    
                });
            //}

        default:
            return state;

    }
}