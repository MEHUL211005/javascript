// "33abc"
let score1 = "33abc";

console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof(valueInNumber1));

// number converted but abc is not a number so don't always rely on numbers in js
console.log(valueInNumber1); // NaN


// null
let score2 = null

console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));

// number converted but null is not a number so don't always rely on numbers in js
console.log(valueInNumber2); // 0


// undefined
let score3 = undefined

console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof(valueInNumber3));

// number converted but undefined is not a number so don't always rely on numbers in js
console.log(valueInNumber3); // NaN


// true
let score4 = true

console.log(typeof(score4));

let valueInNumber4 = Number(score4)
console.log(typeof(valueInNumber4));

// number converted but true is not a number so don't always rely on numbers in js
console.log(valueInNumber4); // 1


// "Mehul"
let score5 = "Mehul"

console.log(typeof(score5));

let valueInNumber5 = Number(score5)
console.log(typeof(valueInNumber5));

// number converted but string Mehul is not a number so don't always rely on numbers in js
console.log(valueInNumber5); // NaN


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0 


// Boolean Conversion
let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);

console.log(booleanIsLoggedIn1); // true


let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);

console.log(booleanIsLoggedIn2); // false


let isLoggedIn3 = "Mehul"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);

console.log(booleanIsLoggedIn3); // true


// 1 => true
// 0 => false
// "" => false
// "Mehul" => true


// String Conversion
let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof(stringNumber));