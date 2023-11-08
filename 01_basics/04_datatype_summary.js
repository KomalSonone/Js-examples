// A. Primitive datatypes -
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

const pie=3.14;
let name = "John";
let status = false;
let bigNum = 3335646534900088456333n;
let temp = null;
let lastName;
const id = Symbol(3.15)
const newId = Symbol(3.15)

console.log(id===newId)


// B.Non-primitive datatypes
//1. Arrays
//2. Object
//3. Function

const courses = ["html", "css", "js", "angular" ]

console.log(courses[2])
let obj = {id:1, name:"John", status:"active"}
console.log(obj)

let func = function(){
    console.log("This is function...")
}

/********** Memory ***********/

/*Stack memory(Primitive): Stack memory is used for storing local variables and function calls and has a fixed size.
It is fast and efficient, but can only be used for storing short-lived data.*/


/*Heap memory(Non-primitive): Heap memory is used for storing objects and class instances 
and is dynamically allocated at runtime.*/