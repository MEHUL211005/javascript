const names = ["Mehul", "Gagan", "Simran"]
const surnames = ["Bajaj", "Gupta", "Singh" ];

// names.push(surnames); //array in array, it takes second array as data and pushed in 1st array
// console.log(names);

// console.log(names[3][1]); // not a good method

// const fullNames = names.concat(surnames);

// console.log(fullNames);

const allNames = [...names, ...surnames] //spread operator , it spreads all elements of array individually ,works like concat
console.log(allNames);

const myArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 
const realMyArr = myArr.flat(Infinity) //flat will make nested array into single array //infinity value of depth because it will automatically see
console.log(realMyArr);

console.log(Array.isArray("Mehul")); //false
console.log(Array.from("Mehul")); //it will create array of data given

console.log(Array.from({name:"Mehul"})); //it will give empty array because we have to tell for what we have to create array for key or gor values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //array.of and array.from is same