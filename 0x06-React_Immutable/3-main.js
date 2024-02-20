import { getListObject, addElementToList } from './3-list.js';

//getListObject
const array = ['a', 'b', 'c'];
const immutableList = getListObject(array);
console.log(immutableList); // Output: List [ "a", "b", "c" ]

//addElementToList
const initialList = getListObject(['a', 'b', 'c']);
const updatedList = addElementToList(initialList, 'd');
console.log(updatedList); // Output: List [ "a", "b", "c", "d" ]
