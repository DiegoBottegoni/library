const {stringifyValue} = require('./library/stringifyValue')
const {invertBoolean} = require('./library/invertBoolean')
const {convertToNumber} = require('./library/convertToNumber')
const {coerceToType} = require('./library/coerceToType')
const {addValues} = require('./library/addValue')

// TESTING stringifyValue() //

console.log("********************************")
console.log("TESTING stringifyValue()")
console.log("********************************")

const string1 = stringifyValue(25);
const string2 = stringifyValue({ name: "Diego" , age: 36});
const string3 = stringifyValue(null);
const string4 = stringifyValue(["Diego" ,36]);
const string5 = stringifyValue(undefined);

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(string5);

// TESTING invertBoolean() //
console.log("********************************")
console.log("TESTING invertBoolean()")
console.log("********************************")
  
try {
const booleanCase = invertBoolean(true);
console.log(booleanCase);
} catch (error) {
console.log(error.message);
}

try {
const booleanCase2 = invertBoolean(false);
console.log(booleanCase2);
} catch (error) {
console.log(error.message);
}

try {
const numberCase = invertBoolean(1);
console.log(numberCase);
} catch (error) {
console.log(error.message);
}

try {
const stringCase = invertBoolean("Hello");
console.log(stringCase);
} catch (error) {
console.log(error.message);
}

// TESTING convertToNumber() //

console.log("********************************")
console.log("TESTING convertToNumber()")
console.log("********************************")

try {
const value = false;
const numberValue = convertToNumber(value);
console.log('Original:', value);
console.log('Converted:', numberValue);
} catch (error) {
console.error(error.message);
}

try {
const value = "Hello!";
const numberValue = convertToNumber(value);
console.log('Original:', value);
console.log('Converted:', numberValue);
} catch (error) {
console.error(error.message);
}

try {
const value = "10";
const numberValue = convertToNumber(value);
console.log('Original:', value);
console.log('Converted:', numberValue);
} catch (error) {
console.error(error.message);
}

try {
const value = undefined;
const numberValue = convertToNumber(value);
console.log('Original:', value);
console.log('Converted:', numberValue);
} catch (error) {
console.error(error.message);
}

// TESTING coerceToType() //

console.log("********************************")
console.log("TESTING coerceToType()")
console.log("********************************")


try {
const value1 = 42;
const coercedString = coerceToType(value1, 'string');
console.log('Original:', value1);
console.log('Coerced:', coercedString);

const value2 = "42";
const coercedNumber = coerceToType(value2, 'number');
console.log('Original:', value2);
console.log('Coerced:', coercedNumber);

const value3 = "true";
const coercedBoolean = coerceToType(value3, 'boolean');
console.log('Original:', value3);
console.log('Coerced:', coercedBoolean);

const value4 = "Hello";
const coercedInvalid = coerceToType(value4, 'number');
console.log('Original:', value4);
console.log('Coerced:', coercedInvalid);
} catch (error) {
console.error(error.message);
}

// TESTING addValues() //

console.log("********************************")
console.log("TESTING addValues()")
console.log("********************************")

try{
const result1 = addValues(2, 3);
console.log("The result of the addition of the two arguments is:", result1);
const result2 = addValues("Hello ", "World");
console.log("The result of the addition of the two arguments is:", result2);
const result3 = addValues({ name: "Diego", age: 36}, {name: "Pepito", age: 35});
console.log("The result of the addition of the two arguments is:", result3);
const result4 = addValues(true, false);
console.log("The result of the addition of the two arguments is:", result4);
const result5 = addValues(2n, 3n);
console.log("The result of the addition of the two arguments is:", result5);
const result6 = addValues([1, 2], [3, 4]);
console.log("The result of the addition of the two arguments is:", result6);
const resultError = addValues(true, "true");
console.log(resultError);
} catch (error) {
console.log(error.message)
}
