console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num);

num=6;
console.log(num);
var num;

a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'
