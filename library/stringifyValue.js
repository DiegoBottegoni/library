function stringifyValue(value) {
  switch (typeof value) {
    case 'object' || 'array':
      return (value !== null) ? JSON.stringify(value) : '';
    case 'string':
    case 'number':
    case 'boolean':
      return String(value);
    default:
      return '';
  }
}

module.exports = { stringifyValue }