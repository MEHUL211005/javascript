//destructing objects

const course = {
    courseName: "javascript",
    price:1000,
    courseInstructor:"xyz"
}

//console.log(course.courseInsructor);

//another way - 
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor:teacher} = course
console.log(teacher);

//destructuring 
// const navbar = ({company}) => {

// }

// navbar(company = "mehul")

//API CONCEPTS 
//JSON //keys also as string 
// {
//     "name":"Mehul",
//     "courseName": "Javascript",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

//CONVERT OBJECT TO JSON
const user = {
    name: "Mehul",
    age: 20
}

const data = JSON.stringify(user)

console.log(data);

//Convert JSON to Object
const data = '{"name":"Mehul","age":20}'

const obj = JSON.parse(data)

console.log(obj.name);