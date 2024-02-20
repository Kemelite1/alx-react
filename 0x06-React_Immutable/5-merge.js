import { List, Map } from 'immutable';

//concatenate two arrays into a List
export function concatElements(page1, page2) {
    const concatenatedList = List(page1.concat(page2));
    return concatenatedList;
}

//merge two objects into a List
export function mergeElements(page1, page2) {
    // Merge the objects using Map and use page2 values if keys are the same
    const mergedList = List(Map(page1).merge(Map(page2)));
    return mergedList;
}
