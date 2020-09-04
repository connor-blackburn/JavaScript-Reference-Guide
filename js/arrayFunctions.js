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

// Using Map function to transform the data in one array to create another.
var nums = [10, 15, 12, 67, 90, 100];
function x10 (num) {
    return num * 10;
}
var numsx10 = nums.map(x10); // Results - (6) [100, 150, 120, 670, 900, 1000].
// Map always remains the same order as original array and keeps the original unaffected

function calculatePercentage(scores, highestPossible,) {
    return scores.map(function(scores) {
        return (100 / highestPossible) * scores;
    });
}

// Using the reduce function to take an array and reduce it to a single value.
var nums2 = [10, 15, 12, 67, 90, 100];
// Reduce takes all the numbers from the above array, and iterates through it, keeping a running total so you are left with the result of adding all the numbers together - 294
var reduced = nums2.reduce(function(runningTotal, currentValue) {
    return runningTotal + currentValue;
}, 0
);

// Filter takes an array and filters the results based on specific rules. A new array is created and the original if left untouched
var nums3 = [10, 15, 12, 67, 90, 100];
function isEven(num) {
    return (num % 2 === 0);
}
function isOdd(num) {
    return (num % 2 !== 0);
}
console.log(nums3.filter(isEven)); // (4) [10, 12, 90, 100]
console.log(nums3.filter(isOdd)); // (2) [15, 67]


