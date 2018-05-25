let initialState = {
    lists: []
}

export default function(state = initialState, action) {
    if(action.type === 'ADDLIST'){
        return { lists: state.lists.push(action.item)};
    }
    if(action.type === 'DELETELIST'){

    }
    if(action.type === 'LOADLIST'){
        return { 
            ...state, list: [...state.lists, action.item]
        }
    }
}