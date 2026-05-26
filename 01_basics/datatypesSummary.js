// Javascript is a dynamically typed language
// Variable data types are decided at runtime
// A variable can store different types of values


// PRIMITIVE DATATYPES 
// 7 TYPES => String, Number, Boolean, null, undefined, Symbol, BigInt(very big numbers)

const score = 100
const scoreValue = 100.33
const isLoggedIn = false
const outsideTemp = null
let userName;
//symbol makes unique value
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber= 22222222222222222222222n

console.log(score , typeof(score));
console.log(scoreValue ,  typeof(scoreValue));
console.log(isLoggedIn ,  typeof(isLoggedIn));
console.log(outsideTemp , typeof(outsideTemp));
console.log(userName ,  typeof(userName));
console.log(id , typeof(id));
console.log(anotherId , typeof(anotherId));
console.log(bigNumber , typeof(bigNumber));


// NON-PRIMITIVE DATATYPES (REFERENCE TYPE)
// Array, Object, Functions 

//array
const details = ["Mehul" , 18 , "Jalandhar", "Punjab" , null];

//object
let myObject = {
    name:"Mehul" ,
    age:18,
    city:"Jalandhar"
};

console.log(details , typeof(details));
console.log(myObject , typeof(myObject));

//function
let myFunction = function(){
    console.log("I am Mehul", typeof(myFunction));
}

myFunction();