

const INITIAL_STATE ={

    Items: []
};

const RootReducer=(state = INITIAL_STATE,action)=>{
    switch(action.type){

        case "ADD_ITEM" :
            return{
                ...state,
                Items: addItem(state.Items,action.payload)
            }

        default :
            return state;
    }
}

const addItem = (prev, newItem)=>{
    return [...prev,{...newItem}];
}

export default RootReducer;