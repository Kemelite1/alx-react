import accessImmutableObject from './2-nested.js';

const object = {
    name: {
        first: "Guillaume",
        last: "Salva"
    }
};

const value = accessImmutableObject(object, ['name', 'first']);
console.log(value); 
