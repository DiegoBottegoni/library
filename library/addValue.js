function addValues(a, b) {
  const typeA = typeof a;
  const typeB = typeof b;

  if (typeA !== typeB) {
    throw new TypeError(`Unsupported operand types for ${typeA} and ${typeB}`);
  }

  switch (typeA) {
    case 'string':
    case 'number':
    case 'bigint':
      return a + b;
    case 'boolean':
      return a || b;
    case 'object':
      if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
      } else {
        const result = {};
        for (let key in a) {
          if (a.hasOwnProperty(key)) {
            result[key] = a[key];
          }
        }
        for (let key in b) {
          if (b.hasOwnProperty(key)) {
            result[key] = (result[key] || 0) + b[key];
          }
        }
        return result;
      }
    default:
      throw new TypeError(`Unsupported operand types for ${typeA}`);
  }
}

module.exports = { addValues }