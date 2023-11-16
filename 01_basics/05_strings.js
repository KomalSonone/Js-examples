/*String methods
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/

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

let str = " Hello World! "
let newStr2 = "One two three four five six six six one "
let newStr = str.substr(-5,4) //Worl
console.log(newStr)

//console.log(str.replace("World","India")) //replaces the first value with second in the string
console.log(str.replace(/WORLD/i,"India"))
console.log(newStr2.replaceAll("six","number"));

firstVal="One";
secondval="Two"
console.log(firstVal.concat(" ",secondval))


console.log(str.trim());  //removes the white space from both end

//The padStart() method pads a string from the start.
padVal = "John";
console.log(padVal.padStart(6,"cena"))  //ceJohn
console.log(padVal.padEnd(8,"cena")) //Johncena

console.log(padVal.charCodeAt(3))  //returns ASCII code


//A string can be converted to an array with the split() method:
let text = "a,b,c,d,c"
text1 = text.split(",") // Split on commas
console.log(text1[3]) //d

//The includes() method returns true if a string contains a specified value.
let newText = "My name is john."
console.log(newText.includes("john"))  //true

//The startsWith() method returns true if a string begins with a specified value.
//The endsWith() method returns true if a string ends with a specified value.
console.log(newText.startsWith("My"))  //true
