// A fucntion is almost a self contained programme within your programme.
// A function is a reusable block of code which can be called without your progamme.
// Only need to write a function once and it can be used any amount of times. Supporting the DRY theory. (Dont Repeat Yourself!)

// Function Syntax.
// Keyword, function name, arguments (var's that exist within the function), code block.

function functionName (a, b) {
    console.log('Called with', a, b);
    return a + b; // Return statement not mandatory. Once a return statement is hit the function will stop executing and anything below it will not be executed.
}

functionName(1, 3); // Calling the function, will return 1 as a, and b will have 3 due to the order in which the values are given. - 4

// A function call is an expression, and so can be used anywhere a value can be used
var a = functionName(3, 5);
console.log(a); // 8