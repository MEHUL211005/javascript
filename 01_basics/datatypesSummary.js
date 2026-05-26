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

/////////////////////////////////////////////////////////////////////////////////////////

// Memory Used -
// Primitive Data Types => Stack , means copy of variable is received
//Non-Primitive Data Types => Heap , means reference of orignal value is received

let myName = "Mehul Bajaj"
let anotherName = myName 
anotherName = "Mehul"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "qwe2@gmail.com",
    upi: "qwe@"
};

let userTwo=userOne
userTwo.email="xyz@gmil.com"

console.log(userOne.email);
console.log(userTwo.email);

// Primitive data types (string, number, boolean, etc.) are copied by value
// Changing one variable does not affect the other

// Reference data types (object, array, function) are copied by reference
// Both variables point to the same memory location
// Changing one object also changes the other