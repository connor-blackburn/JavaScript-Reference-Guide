// Function declerations vs Function expressions.
// An expression can be used anywhere a value can be used. So we can use function expressions anywhere a value would go.
// Differences in how you define functions in js.

// Function Decleration, we have seen this before in previous examples.
function add (a, b) {
    return a + b;
}

// Function Expression - assigning a nameless function to a variable and call the var name when wanting the function.
var addExpression = function (a, b) {
    return a + b;
}

// Higher order functions. 
// This is a function which takes a function as an argument or returns a function as its return value
// An array map function is a basic example as it takes the multiply function as an argument
// Map is a higher order function
function multiply (num) {
    return num * 15;
}
var numbers = [
    1,
    5,
    7,
]
console.log(numbers.map(multiply)); // (3) [15, 75, 105]

function map (list, transform) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        result.push(transform(list[i], i))
    } 
    return result;
}
console.log(map(numbers, multiply)); // (3) [15, 75, 105]

// Functions that return a function - this can reduce wasted code and increses reusable code
function withSalesTax(taxRate) {
    return function (price) {
        return Number((price * taxRate).toFixed(2));
    }
}
var standardTaxItems = [
    100,
    99.99,
    82.99,
]
var reducedTaxItems = [
    10,
    87,
    12.99,
]

var standardItemsWithTax = 
    standardTaxItems.map(withSalesTax(1.2)); //(3) [120, 119.99, 99.59]

var reduceedItemsWithTax = 
    reducedTaxItems.map(withSalesTax(1.12)); //(3) [11.2, 97.44, 14.55]