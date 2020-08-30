// Basic String Methods

var string = 'Hello';
console.log(string.length); // Calculates the length of a string - 5
console.log(string.substr(3)); // Returns a substring, starts at the character specified (starting from 0) - lo
console.log(string.substr(3, 1)); // Same as above, but only returns 1 character - 1

var name = 'Connor Blackburn';
console.log(name.replace('Connor', 'Sophie')); // Replaces first arg with second specified - Sophie Blackburn
console.log(name.toUpperCase()); // Converts string to all upper case - CONNOR BLACKBURN
console.log(name.toLowerCase()); // Converts string to all lower case - connor blackburn

console.log('Connor' + ' ' + 'Blackburn'); // String concatenation, adds the string together - Connor Blackburn