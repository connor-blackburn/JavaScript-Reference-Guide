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
