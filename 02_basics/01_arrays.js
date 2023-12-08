//An array is a special variable, which can hold more than one value
const cars = ["Saab", "Volvo", "BMW"]; //declaring using array literal 
//You access an array element by referring to the index number
//console.log(cars[0]);  
//console.log(typeof cars);  //object
const cars2 = new Array ("Mercedes", "Ferrari", "Rolls-Royce") // declaring using new keyword
//console.log(cars2[cars2.length -1]) //accessing the last element of array
for(i=0;i<cars2.length;i++) {
    console.log(cars2[i])
}
console.log(Array.isArray(cars)) //true

/******************Array methods*******************/
/*
Array length
Array toString()     Array join()
Array pop()          Array delete
Array push()         Array concat()
Array shift()        Array unshift()
Array flat()         Array splice()
Array slice()         */

const fruits = ["Apple","Banana","Mango","Orange","Grapes"]
//(1) length property returns the length (size) of an array
console.log(fruits.length) //5 - as array fruits as 5 elements

//(2) toString() converts an array to a string of (comma separated) array values
console.log(fruits.toString())

//(3) join() method also joins all array elements into a string
console.log(fruits.join("*")) //(in addition you can specify the separator - eg-"*")

//(4) pop() method removes the last element from an array
console.log(fruits.pop());
console.log(fruits)

//(5) Array elements can be deleted using the JavaScript operator delete
//Using delete leaves undefined holes in the array - use pop() instead
delete fruits[0];
console.log(fruits[0]); //undefined

//(6) push() method adds a new element to an array (at the end)
fruits.push("Grapes");
console.log(fruits); 

//(7) concat() creates a new array by merging (concatenating) existing arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2); //stores in new array
console.log(arr3)

//(8) shift()
