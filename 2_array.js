const heroes =["Thor", "Spiderman", "Iron Man"]    //array of strings
const dc_heroes = ["batman", "Superman", "Wonder Woman"]

// heroes.push(dc_heroes)  //push() adds the element at the end of the array, in this case it adds the entire dc_heroes array as a single element to the heroes array
// const allHeroes = heroes.concat(dc_heroes)  //concat() is used to merge two or more arrays, it does not modify the original array but returns a new array, in this case it merges the heroes and dc_heroes arrays and returns a new array, but we are not storing it in any variable so it will not affect the heroes array
// concat() is used to merge two or more arrays, it does not modify the original array but returns a new array, in this case it merges the heroes and dc_heroes arrays and returns a new array, but we are not storing it in any variable so it will not affect the heroes array
// console.log(allHeroes)
// console.log(heroes[3][0])  //to access the first element of the nested array

const all_hero = [...heroes, ...dc_heroes]  //spread operator is used to spread the elements of the array, it is used to merge two or more arrays, it does not modify the original array but returns a new array, in this case it merges the heroes and dc_heroes arrays and returns a new array, but we are not storing it in any variable so it will not affect the heroes array
console.log(all_hero) 


