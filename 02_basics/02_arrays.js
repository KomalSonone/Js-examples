//Array Iterations
//(1) forEach() method calls a function (a callback function) once for each array element.

//(2) map() method creates a new array by performing a function on each array element.

//(3) flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

//(4) filter() method creates a new array with array elements that pass a test.

//(5) reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduceRight() works from right-to-left in the array.


//(6) every() method checks if all array values pass a test.

//(7) some() method checks if some array values pass a test

//(9) indexOf() method searches an array for an element value and returns its position

//(10) Array.lastIndexOf() returns the position of the last occurrence of the specified element

//(11) find() method returns the value of the first array element that passes a test function

//(12) findIndex() method returns the index of the first array element that passes a test function

//(13) Array.from() method returns an Array object from any object with a length property or any iterable object.

//(14) Array.keys() method returns an Array Iterator object with the keys of an array.

//(15) entries() method returns an Array Iterator object with key/value pairs

//(16)Array.includes() allows us to check if an element is present in an array (including NaN, unlike indexOf)

//(17) Array Spread (...) - The ... operator expands an iterable (like an array) into more elements
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year) 