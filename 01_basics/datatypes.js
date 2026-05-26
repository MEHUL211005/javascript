"use strict"; //treat all JS code as newer version 

// alert( 3 + 3 ) // we are using nodejs, not browser 

//console.log( 3 + 3 ); console.log( "mehul" ) // bad readability- two console in one line
//code readability should be high


// PRIMITIVE  DATATYPES ----
// number => 2^53 // range
// bigint => big numbers
// string => sequence of characters - put in double quotes
// boolean => true/false
// null => sandalone value => represssentation of empty value => OBJECT
// undefined => when you don't give any value
// symbol => unique

// NON-PRIMITIVE DATATYPES ----

//OBJECT
//ARRAY

let name = "MEHUL"
let age = 20
let canvote = true
let city = null
let state;

//object
let details = {
    name:"MEHUL",
    age:18,
    city:"JALANDHAR",
    state:"PUNJAB"
}

//array

let arr = ["mehul","18" , "Jalandhar"]

console.log(name ,typeof(name));
console.log(age , typeof(age));
console.log(canvote , typeof(canvote));
console.log(city , typeof(city));
console.log(state , typeof(state));
console.log(details , typeof(details));
console.log(arr , typeof(arr));