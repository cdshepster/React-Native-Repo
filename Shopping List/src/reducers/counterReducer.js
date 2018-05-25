import data from '../data'
import { ADDLIST, DELETELIST, DELETEITEM, ADDITEM, SETLIST } from '../actions/constants';

let initialState = {   
    LISTS: [],
    ACTIVELIST: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADDLIST:
        console.log(data)
        console.log(data)
            mylists = []

            state.LISTS.forEach(element => {
                mylists.push(element);
            });

            newList = {
                id: action.list.id,
                name: action.list.name,
                image: action.list.image,
                isVisible: action.list.isVisible,
                data: action.list.data
            }

            mylists.push(newList);

            return {LISTS: mylists};


        case DELETELIST:
        mylists = []

            state.LISTS.forEach(element => {
                if(element.id != action.list.id)
                    mylists.push(element);
            });

            return {LISTS: mylists};


        case DELETEITEM:
        mylists = [];

        list = action.list;
        item = action.item;

        console.log("This is my string" , list)

        newList = list
        newList.data = []

        console.log(list.data)
           
        list.data.forEach(element => {

            console.log(element.id)
            console.log(item.id)
            if(element.id != item.id){
                newList.data.push(element);
            }
        });

        state.LISTS.forEach(element => {
            if(element.id != list.id)
                mylists.push(element);
            else
                mylists.push(newList)
        });

        return {LISTS: mylists,
                ACTIVELIST: state.ACTIVELIST};


        case ADDITEM:
            mylists = [];

            index = 0;

            list = action.list;
            item = action.item;

            state.LISTS.forEach(element => {
                if(element.id == list.id)
                    element.data.push(item)

                mylists.push(element);
            });

            return {LISTS: mylists,
                    ACTIVELIST: state.ACTIVELIST};

        case SETLIST:
            list = action.list;
            return {
                LISTS: state.LISTS,
                ACTIVELIST: list
            };

        default: 
            return state;
    }
}
