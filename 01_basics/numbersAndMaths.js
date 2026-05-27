//+++++++++++NUMBERS++++++++++//
const score = 400
console.log(score);

const balance = new Number(1000) //number defined in object form 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //fix decimal places after decimal point

const otherNumber = 23.6876 //precision => 23.7
console.log(otherNumber.toPrecision(3)); //gives precise value , 3 here means to give that much values like 123.8765 => 124

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //will give commas for easy understanding of big numbers  => 1,000,000 us based 
console.log(hundreds.toLocaleString('en-IN')); //it will give commas according to indian number system

// ++++++++++MATH++++++++++++++++++ //
console.log(Math); //Math is a object
console.log(Math.abs(-4)); // - value in positive not vice versa
console.log(Math.round(4.3)); //round of to 4 
console.log(Math.round(5.8)); //round of to 6
console.log(Math.ceil(4.2)); //always round of to  upper value i.e 5
console.log(Math.floor(4.9)); //always round of to lower value  i.e 4
console.log(Math.min(4,3,6,8));
console.log(Math.min(4,3,6,8));

//random => important // Math.random() generates a random number between 0 and 1 (excluding 1) , different everytime.
console.log(Math.random());
console.log((Math.random()*10) + 1); // firstly decimal will shift one place and +1 is for 0.0something case , now value will always be greater than 1
console.log(Math.floor(Math.random()*10) + 1); //rounding off

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)