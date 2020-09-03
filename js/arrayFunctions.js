// JavaScript has many built in functions to help our code remain clean and effiecint.

// One of those functions is the array iterator fucntion, which is a much better option than a forloop.
//forEach - the easiest solution to iterate through an  array using built in JS functions
var names = [
    'Connor',
    'Sophie',
    'Jim',
    'Bob',
]
names.forEach(function (currentItem, i) {
    console.log(i, currentItem);
});
// Reversing the iteration of the array using the .reverse() function.
names.reverse().forEach(function (currentItem, i) {
    console.log(i, currentItem);
});