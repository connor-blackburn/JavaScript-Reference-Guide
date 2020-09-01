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