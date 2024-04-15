const {convertToNumber} = require('./convertToNumber')
const {stringifyValue} = require('./stringifyValue')


function coerceToType(value, type) {
    let coercedValue;
    switch (type) {
      case 'string':
        coercedValue = stringifyValue(value);
        break;
      case 'number':
        coercedValue = convertToNumber(value);
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
