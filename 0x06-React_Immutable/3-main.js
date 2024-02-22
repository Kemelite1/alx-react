import { getListObject, addElementToList } from './3-list';

const list = getListObject(['Maria', 'Dozie', 'Bovi']);

console.log(getListObject(list));

console.log(addElementToList(list, 'Charles'));