//functions in js
function sayMyName(){
    console.log("M");
    console.log("e");
    console.log("h");
    console.log("u");
    console.log("l");
}

sayMyName(); //() for execution, sayMyName is only reference

//adding two numbers

function Add(number1, number2) {                 //parameters // function definition 
    console.log(number1 + number2);
}
//function calling // arguments
Add(5,10);
Add(7, 7);

Add(3, "4"); //34
Add(3, "a") //3a
Add(3, null) //3

const result = Add(3, 5)
console.log("Result:" , result); //undefined 

//good method
function AddNumbers(number1, number2) {                  
    let result2 = (number1 + number2)
    return result2
}

const answer = AddNumbers(3,5)
console.log("RESULT:", answer); //answer will be 8 

//another way 
function Subtract(number1,number2){
    return number1-number2
}
const solution = Subtract(20,10)
console.log("SOLUTION:", solution);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Mehul")); //Mehul just logged in
// console.log(loginUserMessage("")); //just logged in because empty value passed
// console.log(loginUserMessage()); //undefined logged in because no value passed



function loginUserMessage(username){                 // we can give default value (username = "sam") // never undefined now
    if (username == undefined){                      // (!username) //another way of same condition
        console.log("Please enter valid username");
        return 
    }
     return `${username} just logged in`
 }

 console.log(loginUserMessage());

