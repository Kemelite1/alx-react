import { List } from 'immutable';

 //Convert an array into an immutable List
export function getListObject(array) {
    const immutableList = List(array);
    return immutableList;
}

//Append an element to a List
export function addElementToList(list, element) {
    const updatedList = list.push(element);
    return updatedList;
}
