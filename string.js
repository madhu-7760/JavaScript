const name = "Madhu";
const reCount =50;
// console.log(name + reCount + "Value");
console.log(`Hello my name is ${name} and repocount is ${reCount}`);

// const gameName= new String('madhup');
//  console.log(gameName[0]);
//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());

//  console.log(gameName.charAt(2));

//  console.log(gameName.indexOf('h'));
//  console.log(gameName.substring(2,5));

 const newStringOne = "   Madhup   ";
 console.log(newStringOne);
 console.log(newStringOne.trim());
 // trim() works on white spaces



//Replace()
const url= "https://madhu.com/madhu%20patil"
console.log(url.replace("%20", "-"));

//console.log(url.includes('sush'));

console.log(url.replace(/madhu/, "sush")); //g is for global replacement
