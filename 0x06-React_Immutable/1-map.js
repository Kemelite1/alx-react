const { Map } = require('immutable');

function getImmutableObject(object){
    const immutableMap = Map(object);
    return immutableMap;
}

const exampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};


const immutableMap = getImmutableObject(exampleObject);
console.log(immutableMap);