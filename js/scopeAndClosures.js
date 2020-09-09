// Scope defines the rules for visibility of variables within js.
// Where a variable is visibile from within the code is known as its scope.
// Js has 3 levels of scope; global, function level and block level.
function myFunction () {
    var innerVar = 'This is the inner var';
    console.log(innerVar);
}
myFunction();

//console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined. 
// This is because the var was declared within the function, so is only accessible within the function. It has function level scope.

// Any variable declared outside of a function is known to be within global scope and can be accessed anywhere in the code
var name = 'Connor'; 

// The global scope can not see into its child, the function scpoe
// Variables within the function scope will not override variables within the global scope, even if names the same due to visibility
// They are 2 different variables completely within 2 different scopes, they just happen to have the same name
// Within a function js will always check local variables first before checking the parent, global scope
// Not using the var keyword within a function will override a variable within the global scope and reassign a value, and create a new one if it does not exist


// A closure occures when higher order functions combine with the rules regarding scope.
// This function is also known as a closure
function withSalesTax(taxRate) {
    return function(price){
        return Number((price * taxRate).toFixed(2));
    }
 }

 var withLowTax = withSalesTax(1.1);
 console.log(withLowTax(100)); // 110

 var withHighTax = withSalesTax(1.2);
 console.log(withHighTax(100)); // 120

 // Both of these function are actually the inner function of the withSalesTax function with different tax rates which is passed as an argument to the outer function
 // The value of the argument seems to stay frozen to the value it was when it was called.
 // Eventhough we pass in the argument 1.2 into the withHighTax(1.2) most recently, the withLowTax(1.1) still remains as 110, the previous call
 // The key concept to closure is a new scope is created when we call a function, not when we define it.
 // Once the function is called and the value is returned, the scope is gone.

 // A closure is created when an inner function is returned from an outer function, and the returned function retains access to the outer functions scope even after the outer function has return. At which point, the scope would not usually exist if it was not for the closure