// const numbers=[1,2,3,4,5];
// const double= numbers.map(num =>num*2);

// console.log(numbers);
// console.log(double);

const myArr =[0,1,2,3,4,5];
const myNames =["Madhu", "Sush", "Patil"];
console.log(myArr[1]);
console.log(myNames[0]);

//Array Methods
myArr.push(6)  //adds element at the end of the array
console.log(myArr);

myArr.pop();  //removes last element
// console.log(myArr);

// myArr.unshift(9); //adds element at the beginning of the array
// console.log(myArr);

// myArr.shift(); //removes first element
// console.log(myArr); 

// console.log(myArr.includes(9)) //includes() checks if the element is present in the array and returns true or false

// console.log(myArr.indexOf(3)); //indexOf() returns the index of the first occurrence of the element in the array, if not found returns -1   

const newArr =myArr.join()  //join() converts array to string and returns the string, by default it uses comma as separator, you can specify separator as argument

// console.log(myArr)
console.log(newArr)

//       Slice , Splice
console.log("A ", myArr);
const myn1= myArr.slice(2,4)  //slice(start, end) returns a new array containing the elements from start index to end index (exclusive), it does not modify the original array
console.log(myn1);