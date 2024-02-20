import { concatElements, mergeElements } from './5-merge.js';

const page1 = [1, 2, 3];
const page2 = [4, 5, 6];
const concatenatedList = concatElements(page1, page2);
console.log(concatenatedList); // Output: List [ 1, 2, 3, 4, 5, 6 ]

//
const page1Obj = { a: 1, b: 2 };
const page2Obj = { b: 3, c: 4 };
const mergedList = mergeElements(page1Obj, page2Obj);
console.log(mergedList); // Output: List [ [ 'a', 1 ], [ 'b', 3 ], [ 'c', 4 ] ]
