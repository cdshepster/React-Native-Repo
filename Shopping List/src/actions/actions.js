import { ADDLIST, DELETELIST, DELETEITEM, ADDITEM, SETLIST} from './constants';

export function AddList(inList) {
    return {
        type: ADDLIST,
        list: inList
    };
}
export function DeleteList(list) {
    return {
        type: DELETELIST,
        list: list
    };
}
export function DeleteItem(item, list) {
    return {
        type: DELETEITEM,
        item: item,
        list: list
    };
}
export function AddItemToList(item,list) {
    return {
        type: ADDITEM,
        item: item,
        list: list
    };
}
export function setActiveList(list) {
    return {
        type: SETLIST,
        list: list
    };
}
