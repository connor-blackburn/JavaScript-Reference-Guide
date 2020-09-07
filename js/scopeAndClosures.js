// Scope defines the rules for visibility of variables within js.
// Where a variable is visibile from within the code is known as its scope.
// Js has 3 levels of scope; global, function level and block level.
function myFunction () {
    var innerVar = 'This is the inner var';
    console.log(innerVar);
}
myFunction();

console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined. 
// This is because the var was declared within the function, so is only accessible within the function. It has function level scope.

// Any variable declared outside of a function is known to be within global scope and can be accessed anywhere in the code
var name = 'Connor'; 

// The global scope can not see into its child, the function scpoe
// Variables within the function scope will not override variables within the global scope, even if names the same due to visibility
// They are 2 different variables completely within 2 different scopes, they just happen to have the same name
// Within a function js will always check local variables first before checking the parent, global scope
// Not using the var keyword within a function will override a variable within the global scope and reassign a value, and create a new one if it does not exist

