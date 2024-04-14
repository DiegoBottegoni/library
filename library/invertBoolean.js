function invertBoolean(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Input must be a boolean');
    } else {
      return !value;
    }
  }

  module.exports = { invertBoolean }