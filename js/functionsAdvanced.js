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

// Arrow functions / fat arrow functions, they allow us to write shorter function expressions.
// Added in ES6 version of js, may not work in all browsers
// Example we have seen many times before
var numbers = [
    10,
    20,
    30,
];
numbers.reduce(function(total, current) {
    return total + current;
}, 0);

// Lets convert this into an arrow function. No function keyword, args in () then the arrow then function body
// If the function does not return a console log but only returns a return value, arrow functions allow us to use this syntax
// The function returns the expression after the arrow
// If the function required several lines in the body of the function, you would need to bring back the {} brackets
numbers.reduce((total, current) => total + current, 0);

// If the arrow function only requires one argument, you can remove the () around the argument.
var multiply = numbers.map(x => x * 10);
console.log(multiply); // (3) [100, 200, 300]

// Because arrow functions are expressions, you can call and name them by assigning them to variables
var multiplyx5 = x => x * 5;
console.log(multiplyx5(4)); // 20

// More than 1 argument 
var addition = (x, y) => x + y;
console.log(addition(10, 23)); // 33

// If multiple arguments and more lines of code as the function returns more than a single expression
// {} must be added again
var moreThan = (x, y) => {
    if (x > y) {
        console.log('X is more than Y');
    } else {
        console.log('X is not bigger than Y');
    }
}
// The best practice is to use an arrow function when you require an inline, or one line function returning a value.

// Function arguments. Functions do not have to take a set number of arguments and can a varible number of arguments in JavaScript
// What we have seen before, set to 2 arguments and will only add two numbers. What if we wnated to add more numbers together?
function add (a, b) {
    return a + b;
}
function addv2 () {
    total = 0;
    for (i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}
console.log(addv2(2, 8, 10, 20, 5, 5, 10)); // This logs the arguments to the addv2 function. Result - 60