module.exports = function reactBoundFunction(component, name) {
    if (component) {
        if (component.prototype.__reactAutoBindMap) {
            if (typeof component.prototype.__reactAutoBindMap[name] === 'undefined') {
                throw new Error('Unable to find bound method.');
            }
            return { object: component.prototype.__reactAutoBindMap, method: name };
        } else if (component.prototype.__reactAutoBindPairs) {
            var method = component.prototype.__reactAutoBindPairs.indexOf(name);
            if (method === -1) throw new Error('Unable to find bound method.');
            return { object: component.prototype.__reactAutoBindPairs, method: (method + 1) };
        }
    }

    throw new Error('Unable to find bound method.');
}
