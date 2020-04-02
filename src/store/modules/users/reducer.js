import produce from 'immer';

export default function users(state=[], action){
    switch (action.type){
        case 'ADD_USER':
            return produce(state, draft =>{
                const userIndex = draft.findIndex(p=> p.id === action.user.id)
                if(userIndex > 0){
                    draft[userIndex].amount +=1;
                }else {
                    draft.push({
                        ...action.user,
                        amount: 1
                    });
                }
                
            });

        default:
            return state;

    }
}