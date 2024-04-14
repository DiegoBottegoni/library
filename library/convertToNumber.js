function convertToNumber(value) {
    switch (typeof value) {
      case 'string':
        const parsedFloat = parseFloat(value);
        const parsedInt = parseInt(value, 10);
        if (!isNaN(parsedFloat)) {
          return parsedFloat;
        } else if (!isNaN(parsedInt)) {
          return parsedInt;
        } else {
          throw new Error('Conversion to number is not possible');
        }
      case 'number':
        return value;
      case 'boolean':
        return value ? 1 : 0;
      default:
        const converted = +value;
        if (!isNaN(converted)) {
          return converted;
        }
        throw new Error('Conversion to number is not possible');
    }
  };

  module.exports = { convertToNumber }
  