export default function accessImmutableObject(object, array) {
    let current = object;
    for (let key of array) {
        if (current instanceof Map) {
            current = current.get(key);
        } else if (typeof current === 'object' && current !== null) {
            current = current[key];
        } else {
            return undefined;
        }
    }
    return current;
}
