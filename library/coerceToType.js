function coerceToType(value, type) {
    let coercedValue;
    switch (type) {
      case 'string':
        coercedValue = String(value);
        break;
      case 'number':
        coercedValue = Number(value);
        break;
      case 'boolean':
        coercedValue = Boolean(value);
        break;
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
    if (isNaN(coercedValue) && typeof coercedValue !== 'boolean') {
      throw new Error(`Unable to coerce value '${value}' to type '${type}'`);
    }
    return coercedValue;
};

module.exports = { coerceToType }
