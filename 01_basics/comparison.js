// easy comparisons
console.log(2>10);
console.log(2>=10);
console.log(2<10);
console.log(2==10);
console.log(2!=10);

//when making comparisons always use same datatypes, don't use different datatypes. 
// tricky comparisons
console.log("2">1);//true , js will automatically convert 2 to number 
console.log("02">1); // true


console.log(null>0); //false
console.log(null == 0); //false
console.log(null<0); //false because equality== do not convert null to a number, do not treat it as 0
console.log(null >= 0); //true because comparisons convert null to a number, treating it as 0

//undefined will give always fale in comparison with 0
console.log(undefined>0); //false
console.log(undefined == 0); //false
console.log(undefined<0); //false 
console.log(undefined >= 0); //false

// === it also checks for same datatypes as well as values. 
// == only checks equal values. 

console.log("2"== 2); //true
console.log("2"=== 2); //false