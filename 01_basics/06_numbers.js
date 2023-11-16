const pi = 3.14;
const score = new String(100);
console.log(typeof(pi)); // number
console.log(typeof(score)); //object
console.log(score); // [Number : 100]

let firstNum = 357;
let secondNum = 122;
let result = (firstNum/secondNum).toFixed(2);  //Returns a number written with a number of decimals.. here is 2
console.log(result)  //2.93 

//toPrecision() returns a string, with a number written with a specified length
let newNum = 289.744;
console.log(newNum.toPrecision(3)); //290
console.log(newNum.toPrecision(4)); //289.7

let newNum2 = 1289.744;
console.log(newNum2.toPrecision(3)); //1.29e+3;

let currency = 1000000000;
console.log(currency.toLocaleString()); //1,000,000,000
console.log(currency.toLocaleString('en-IN')) //1,00,00,00,000

/********************** Math ****************************/

console.log(Math.E      )  // returns Euler's number
console.log(Math.PI     )  // returns PI
console.log(Math.SQRT2  )  // returns the square root of 2
console.log(Math.SQRT1_2)  // returns the square root of 1/2
console.log(Math.LN2    )  // returns the natural logarithm of 2
console.log(Math.LN10   )  // returns the natural logarithm of 10
console.log(Math.LOG2E  )  // returns base 2 logarithm of E
console.log(Math.LOG10E )  // returns base 10 logarithm of E

/* Maths method
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

console.log (Math.round(4.98)); //5 - returns the nearest integer
console.log(Math.ceil(4.2)) //5 -rounded up to its nearest integer
console.log(Math.floor(4.9)) //4 - rounded down to its nearest integer
console.log(Math.trunc(4.7)); // 4 - returns the integer part