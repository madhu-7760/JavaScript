// const acc_id= "12345";
// let name= "Madhu";
// var age = 21;

//  dont use var bcoz of block scope issue and redeclaration issue
// console.log(acc_id);
// console.log(name);
// console.log(age);
// console.table([acc_id,name,age]);

//number => 2 to power 53
//bigint =>
//string => " " collection of characters
//boolean => true or false
//null => empty value
//undefined => variable declared but not assigned
//symbol => unique identifier

// console.log(typeof acc_id);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof null);

// let score = "33"
//  let score = "33ab"
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);    //Converted into number

// console.log(typeof valueInNumber);
// console.log(valueInNumber);
 
// "33" =>33
// "33ab" => NaN => Not a Number
// true =>1 ; false => 0
// " " => false
// "Madhu" => true

// let isLogged = 1
// let booleanIsLogged = Boolean(isLogged);
// console.log(booleanIsLogged);

// let someValue = 33
// let stringValue = String(someValue);
// console.log(stringValue);
// console.log(typeof stringValue);

 const score = 100
 const scoreVal= 100.3

 const isLog= false
 const outTemp=null
 let userMail;

//  console.log(typeof outTemp);
//  console.log(typeof userMail);
 
//  const id= Symbol('123');
//  const id2= Symbol('123');

// console.log(typeof id);
//  console.log(id === id2);  //false bcoz symbol is unique

 //Return Types
//  null => object
//  undefined => undefined 
//  Undefined => undefined
//  Boolean => boolean
//  Number => number
//  String => string
//  Symbol => symbol
//  BigInt => bigint


//Stack => Primitive Data Types
//Heap => Reference Data-(Non Primitive )

let myName = "Madhu";
let myName2 = myName;
myName2 = "Sushmitha";

console.log(myName);
console.log(myName2);

let userOne ={
    name: "Madhu",
    age: 21,
    email: "m@gmail.com"

}
 let userTwo= userOne;
 userTwo.email = "Sush@google.com";

 console.log(userOne);