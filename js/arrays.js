// An array is a list, usually of related elements.
// As many or as little elements as you please. (max elements = 4.29billion)
// A single array can mix and hold any type of data types.
// Items in arrays are called elements.

// Array syntax
// var arrayname = [ 'array element', 'array element2', ];

var names = [
    'Connor',
    'Sophie',
    'Bob', 
    'Jeff',
];

console.log(names[1]); // Result - Sophie, as array indexing start at 0.
console.log(names.length); // Result - 4. Returns the length of the array.

var mixedArray = [
    'Connor',
    'Blackburn',
    21,
    {male: true},
    null,
];

// Adding elements to the end of the array
names[names.length] = 100;
console.log(names);
// Using the Js built in function push to add element to the end of the array
names.push(102);
console.log(names);

// Using the Js built in function unshift to add element to the start of the array
names.unshift('Billy');
console.log(names);

// Using the Js built in function pop to remove an element off the end of the array
console.log(names.pop()); // Returns 102 as this is the removed element
console.log(names);

// Using the Js built in function shift to remove element off the start of the array
console.log(names.shift()); // Returns Billy as this is the removed element
console.log(names);

// An easier alternative without built in function to replace an array element.
names[2] = 'John';
console.log(names);

// Array Manipulation
var classA = [27, 62, 98, 9];
var classB = [12, 98, 54, 32];
var classC = [67, 89, 37, 87];

// Arrays have a built in concat function which will form a new array using 2 or more arrays
console.log(classA.concat(classB)); // Result - (8) [27, 62, 98, 9, 12, 98, 54, 32]

var allResults = classA.concat(classB, classC); // Results - (12) [27, 62, 98, 9, 12, 98, 54, 32, 67, 89, 37, 87]

// Slice
var languages = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'C++',
];
console.log(languages.slice(0, 2)); // Slices an array from 0 to an end point 2. Slice does not include the ending element. This forms a new array. Result - (2) ["JavaScript", "Python"]
console.log(languages.slice(2)); // Slices an array at 2 until the end of the array. Result - ["Java", "C#", "C++"]

// Inserting an element in the middle of an array with splice
console.log(languages.splice(2, 0, 'Typescript')); // Inserts typescript at 2, and the 0 represents elements to replace.
console.log(languages); // Results - (6) ["JavaScript", "Python", "Typescript", "Java", "C#", "C++"]
console.log(languages.splice(2, 1)); // Will remove 1 element at index position 2.

