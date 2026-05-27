//DATES

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

console.log(typeof(myDate));

let myCreateDate = new Date(2025 , 0 , 23) //monhs in js start from 0 to 11 // 0 is january and 11 is december
console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date(2025 , 0 , 23 , 3 , 3) 
console.log(myCreateDate2.toLocaleString()); //given time values will also be shown

let myCreateDate3 = new Date("2025-01-21") //yy-mm-dd //in this form of date months start from 1 to 12 
console.log(myCreateDate3.toDateString()); 

let myCreateDate4 = new Date("01-14-2023") //mm-dd-yy
console.log(myCreateDate4.toLocaleDateString());

//time
let myTimeStamp = Date.now()
console.log(myTimeStamp); //miliseconds
console.log(myCreateDate.getTime()); 

//seconds
console.log(Math.floor(Date.now()/1000)); 

//date methods
let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); //+1 for getting month

`${newDate.getDay()}`; //complex method

//by this method we can define object and there are so much parameters that we can define 
// toLocaleString() formats date/time according to locale settings
// 'default' means system default language/region
// weekday: "long" shows full weekday name like Monday
newDate.toLocaleString('default', {
    weekday: "long"
})
