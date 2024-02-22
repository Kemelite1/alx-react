import { List } from 'immutable';

//Convert an array into a list
export function getListObject(array) {
    return List(array);
}
//Append an element to a List
export function addElementToList(list, element) {
    return list.push(element);
}