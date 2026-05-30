//IIFE => Immediately Invoked FUNCTION Expressions
// IIFE (Immediately Invoked Function Expression)
// Used to execute a function immediately after its creation
// and to avoid polluting the global scope with variables/functions.
//always end iife function with semicolon; for writting more than one iife in single document

function one(){
    console.log("DB connected");
}
one();
//iife
(function two(){
    console.log("DB connected");
})();  //semicolon important for running next iife function

// (function)()//second parenthesis execution

//this is named iife //like named function
( function three() {
    console.log("DB connected");
})();

//always end iife function with ;(semicolon)
//arrow function can also be wriiten as iife 
( () => {
    console.log("Db connected arrow");
})();

//this is unnamed iife //like arrow function
((name) =>{
    console.log(`${name} successfully logged in`);
})("Mehul");