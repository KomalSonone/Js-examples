//JavaScript stores dates as number of milliseconds since January 01, 1970.
/* There are 9 ways to create a new date object:
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
*/
//JavaScript counts months from 0(jan) to 11(dec)
let myDate = new Date();
console.log(myDate); //2023-12-04T07:55:59.147Z
console.log(myDate.toString()) //Mon Dec 04 2023 07:56:29 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Mon Dec 04 2023
console.log(myDate.toLocaleDateString())  //12/4/2023
console.log(myDate.toLocaleString()) //12/4/2023, 7:57:46 AM
console.log(myDate.toTimeString())  //07:57:46 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON()) //2023-12-04T07:57:46.202Z


/*
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/
console.log(myDate.getDate()) //4 (date)
console.log(myDate.getDay()) //1 (monday)
console.log(myDate.getFullYear()) //2023
console.log(myDate.getHours()) //8
console.log(myDate.getMilliseconds()) //997

//Date.parse() returns the number of milliseconds between the date and January 1, 1970:
let newDate = Date.parse("12 Apr 1997")  
console.log(newDate) //860803200000


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()];
console.log(month)  //December

//Date.now() returns the number of milliseconds since January 1, 1970.
let ms = Date.now();
console.log(ms)

// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Date.now() with a year
let years = Math.round(Date.now() / year);
console.log(years) //54 (from 1970 to 2023)

/*Set Date methods are used for setting a part of a date:

setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/

let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text)  //Today is before January 14, 2100.