// singleton =>object with constructor
// not singleton => object with literal

//Object.create // this is constructor method 

//object literals

const mySym = Symbol("Key1")

const User = {
    name:"Mehul",
    "fullName":"Mehul Bajaj" ,  // can also give key like this in double quotes
    [mySym]: "mykey1" , //symbols always written in square brackets in object
    age:20 ,
    course:"BCA" ,
    location:"Jal" , 
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saturday"]

}

//accessing objects
console.log(User);
console.log(User.location); //using dot 
console.log(User["course"]); //using sqaure brackets //good method

//full name can not be accessed using dot because key is also given as string
console.log(User["fullName"]);

console.log(User[mySym]);

User.location = "Amritsar"  //with = , we can change values
console.log(User);

//Object.freeze(User); //with freeze no one now can change the data of objects , its fixed now

User.Name = "Simran"; //change will not be applied
console.log(User);

User.greeting = function(){
    console.log("Hello User");
}

User.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(User.greeting); //anonymous
console.log(User.greeting()); 

console.log(User.greetingTwo());