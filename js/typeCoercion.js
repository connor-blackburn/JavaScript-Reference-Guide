// JavaScript is dynamically typed, types of variables are generally not known at compile time, but runtime.
// The value of the variable is what gives the variable it's data type, not how it is declared or it's name given.

var a = '1';
var b = 12;

console.log(a + b); // Results - 112. This is type coercion. 
// If you try to add use different data types together, JavaScript forces one data type to match with the other to make it work.
// We are trying to add a string and number, so JavaScript coerces the number to a string and concatenates them together.

console.log(Number(a) + b); // Results - 13. As we have changed the string data type to a number accordingly to get a correct answer.

// Checking for equality is vital in programming as it controls the flow of the programme
// == vs === 
console.log(1 == '1'); // Loose equality operator. Allows type coersion, so a string can = a number if the value is the same - True
console.log(1 === '1'); // Strict equality operator. Will not allow type coersion, a string will never = a number, the data type must be the same. This is best practice - False

// It is always best practice to use === as types should never be coerced when checking for equality