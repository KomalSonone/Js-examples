let score= "345";
console.log(typeof(score));
let scoreIsNumber= Number(score);
console.log(typeof(scoreIsNumber));
console.log(scoreIsNumber);
// "33" = 33
// "abc" = NaN
//true = 1

let isLoggedIn = 0;
 let booleanisLoggedIn = Boolean(isLoggedIn);
 console.log(booleanisLoggedIn);
 // 0 = false
 // 1 = true
 // "" = false
 // "abc" = true

 let aNumber = 25;
 let aNumberToString = String(aNumber)
 console.log(typeof(aNumberToString))
 console.log(aNumberToString)

/*****Operations******/

let x =2;
let x_ = x++;
let x__ = x_;
let y=3;
let y_= ++y;
console.log(x_);
console.log(y_);
console.log(x_ + y_);
console.log(x__);

/* If used postfix, with operator after operand (for example, x++), the increment operator 
//increments and returns the value before incrementing.*/

/* If used prefix, with operator before operand (for example, ++x), the increment operator 
increments and returns the value after incrementing.*/