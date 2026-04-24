// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());   //toString() gives date and time in string format
// console.log(myDate.toDateString());  //toDateString() gives date in string format
//console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());   //toLocaleString() gives date and time in local format
// console.log(typeof myDate); //object

let myCreateDate = new Date(2023, 1, 23); //month is 0-indexed
console.log(myCreateDate.toDateString()); //toDateString() gives date in string format
console.log(myCreateDate.toString());  //toString() gives date and time in string format
console.log(myCreateDate.toLocaleString()); //toLocaleString() gives date and time in local format
//console.log(myCreateDate.getFullYear());
//let myCreateDate = new Date("2023-01-23");
let myCreateDate2 = new Date("January 23, 2023");
let myCreateDate3 = new Date(2023, 0, 23, 5 , 3);  //year, month, date, hours, minutes
console.log(myCreateDate);
console.log(myCreateDate2);
// console.log(myCreateDate3);

// let myTimeStamp = Date.now(); //gives current timestamp in milliseconds
// console.log(myTimeStamp);
let myTime =Date.now(); //gives current timestamp in milliseconds   
console.log(myTime) // console.log(new Date(myTime)); //gives date and time from timestamp

console.log(myCreateDate.getTime()); //gives timestamp of the date
console.log(Math.floor(Date.now() /1000)); //gives current timestamp in seconds 

console.log(myCreateDate.getMonth()); //gives month of the date (0-indexed)
console.log(myCreateDate.getDate()); //gives date of the month

const date= myCreateDate.toLocaleString('default',
    {weekday:"long"})    //toLocaleString() gives date and time in local format, 'default' is for default locale, {weekday:"long"} is for getting weekday in long format
console.log(date);

