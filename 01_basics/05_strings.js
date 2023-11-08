let employee = "john";
let city = "mumbai";

console.log(`Hello! My name is ${employee.toUpperCase()} and I live in ${city.toUpperCase()}`)
console.log(employee.length);  //4
console.log(city.charAt(5));   //i
console.log(city.indexOf('u'));  //1

let fullName = "JohnDoe"
let name = fullName.slice(0,4); //John
let surname = fullName.slice(-3); //Doe
let anyName = fullName.slice(-7,-2); //JohnD
// console.log(name)
// console.log(surname)
// console.log(anyName)
//If you omit the second parameter, the method will slice out the rest of the string:
//If a parameter is negative, the position is counted from the end of the string:

 name = fullName.substring(0,4); //John
 anyName = fullName.substring(5,7); //oe
 console.log(name)
console.log(anyName)
/* substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().*/

/*substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.*/

let str = "HelloWorld"
let newStr = str.substr(-5,2)
console.log(newStr)

//console.log(str.replace("World","India")) //replaces the first value with second in the string
console.log(str.replace(/WORLD/i,"India"))
