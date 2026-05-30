const user = {
    username:"Mehul",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`); //this means current context
        console.log(this); //current context will be displayed
    }
}

user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage() //sam, welcome to website

//this.username will be accessed inside object not function

console.log(this); //empty because no global context because it is node environment

function  one(){
    console.log(this);    //inside node environment , a lot of values will come 
}

one()

//arrow functions 

const two = () => {
    let username = "Mehul"
    console.log(this.username); //undefined
    console.log(this); //{} empty object
}

two()

//basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));

//implicit arrow function
const addtwo = (num3, num4) => (num3 + num4) //() no return keyword 

console.log(addtwo(5,5));


// const myArray = [2, 3, 4, 5, 6, 7]

// myArray.forEach(function())
// myArray.forEach(()=>{})