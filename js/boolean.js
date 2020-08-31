// A boolean is a true or false value
// Tends to be given to a var directly or used within conditional statements
var a = 10;
var b = 10;
console.log(a === b); // true - strict equality checker.

// < - Smaller than 
// > - greater than 
// <= - Smaller than or equal to
// >= - Greater than or equal to
// && - And, only true if both or all conditionals are met
// || - Or, true if either side is correct 


// Negation - checking if something is NOT equal to something else
function notEqualToMagicNumber(x) {
    var magicNumber = 10;
    return magicNumber !== x; // Not equal to operator
    // Same as 'return !(magicNumber === x);'
}
// 9 - true
// 10 - false

var isTrue = true;
!isTrue; // Negates to false

// If else statement
function isBiggerThanMagicNumber(x) {
    magicNumber = 10;
    if(x > magicNumber) {
        console.log(x, 'Is bigger than 10');
    } else if(x === magicNumber) {
        console.log(x, 'is equal to 10');
    } else {
        console.log(x, 'Is not bigger than 10');
    }
}

// Truthy Falsy
// && Can be used for conditional assignments
console.log(true && 1); // the && operator will evaluate both values, if both are considered truthy, it will evalute to the second operand. If false, it will evaluate the the first falsy operand
console.log('' && 1); // - Empty String
console.log(true && 0); // - 0, as 0 is considered falsy

// The or || operator will evalulate both operands, if either value is truthy then it will evaluate to the first truthy operand
console.log(1 || true); // 1
console.log(1 || false); // 1
console.log(0 || false); // false
console.log(0 || true); // true

//The Ternary Operator
// if and else are statements, where ternary is an expression
// Function example
function numberCheck(x) {
    var number = 10;
    if (x < number) {
        console.log(x, " is smaller than ", number);
    } else {
        console.log(x, " is equal to or larger than ", number);
    }
}

// Ternary example
// Ternary has 3 operands. The conditional, the question mark, and the expression
// When to use? If else can run an entrie block of code when the condtional is true.
// When needing a simple result, ternary is a much less verbose method. Ternary can also assign the result directly to a var as it is an expression

function numberCheck(x) {
    var number = 10;
    return x < number ? 
    "is smaller than 10" : 
    "is equal to or larger than"
    ;
}