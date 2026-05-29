//singleton objects and constructors

// const tinderUser = new Object ()
// console .log(tinderUser); //empty object

// const tinderUser2 = {} //empty object // non singleton object

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.Name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser); 

//nesting of objects
const regularUser = {
    email: "qwerty@gmailcom" ,
    fullName:{
        userFullName: {
            firstName:"Mehul",
            lastName: "Bajaj"
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

console.log(regularUser.fullName?.userFullName.firstName); //what if fullname doesnot exist,use questionmark, helpful for API

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4: "b"}
const obj6 = {5:"a", 6:"b"}

const obj3 ={obj1, obj2}
console.log(obj3); //object inside object

const obj4 = Object.assign({}, obj1, obj2, obj6) //{} is optional //result will go in emptyobject not in obj1
console.log(obj4);

const obj7 = {...obj1, ...obj2, ...obj6}
console.log(obj7);

// //objects inside arrays
// const users = [
//     {
//         id:1,
//         email:"qwe3@gmail.com"
//     }
// ]

// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //output will be in array
console.log(Object.values(tinderUser)); //output will be in array

console.log(Object.entries(tinderUser)); // different array for each key value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check is it present or not
console.log(tinderUser.hasOwnProperty('email'));

