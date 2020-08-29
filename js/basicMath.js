// Numbers can be used within JavaScript to solve math problems. Numbers prove to be a large part of programming and is something which is mandatory to learn.

// Basic Maths
// Different Operators
console.log(10 * 2); // Multiply - 20
console.log(10 + 2); // Addition - 12
console.log(10 - 2); // Subtraction - 8
console.log(10 / 2); // Division - 5
console.log(10 % 2); // Modulus - 0 (Nothing left over after division)
console.log(10 ** 2); // Power of - 100

var a = 5;
var b = 7;
var result = a + b;
console.log(result); // Result - 12

console.log('Min', Math.min(3, 5, 7, 9)); // Returns the smallest number from the list - 3
console.log('Max', Math.max(3, 5, 7, 9)); // Returns the largest number from the list - 9

console.log('Ceil', Math.ceil(2.4)); // Rounds up - 3
console.log('Ceil', Math.ceil(3.5)); // Rounds up - 4
console.log('Floor', Math.floor(4.9)); // Rounds down - 4
console.log('Floor', Math.floor(1.2)); // Rounds down - 1

// Find the smallest number in list, then round down
var min = Math.min(0.9, 4.8, 1.5);
var floor = Math.floor(min);
console.log(floor);
// Find the largest number in list, then round up
var max = Math.max(0.9, 4.8, 1.5);
var ceil = Math.ceil(max);
console.log(ceil);

console.log(Math.random()); // Generates a random number between 0 - 1 (not including 1)