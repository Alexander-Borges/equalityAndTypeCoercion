// There are two equality operators in JavaScript
// 

console.log(5 == "5"); // "loose" equality, values
// Will print true
console.log(5 === "5")// "strict" equality, types and values
// Will print false

console.log(Number(false));// false equates to 0
console.log(Number(true));// true equates to 0
console.log(true == 1);// Boolean = True because when true is coerced to a number it equals 1
console.log(String(10));// Doing the opposite. Turning a number into a string
// Can be checked with the "typeof" operator.
console.log()

console.log(Number("abc"));// NaN - not equal to anything

console.log();

console.log({} == {});// Why does this return false?
// Are they the same object. They are empty but not the same.

const obj = {}; // Once assigned they will be equal;
console.log(obj === obj);

const arr = [];
console.log(arr === arr);// Same is true of arrays\

// Recommendation is use strict equality 99% of the time
// Use loose equality for checking for null and undefined at the same time