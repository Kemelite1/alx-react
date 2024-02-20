const { Map } = require('immutable');

//initial Immutable Map
const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

//second Immutable Map with chained mutations
const map2 = map.withMutations(mutableMap => {
    mutableMap.set(2, 'Benjamin').set(4, 'Oliver');
});

// Export the constants
export { map, map2 };
