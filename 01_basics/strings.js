const name = "Mehul"
const repoCount = 50
console.log(name + repoCount + "Value"); // old way

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('mehul')
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);

console.log(gameName.__proto__); //object 


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 2); //nonegative values
console.log(newString);

const anotherString = gameName.slice(-4, -2); // negative value
console.log(anotherString);

const newStringOne = "    mehul    "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove extra spaces, works on white spaces

const url = "https://mehul.com/mehul%20bajaj"
console.log(url.replace('%20','--'));

console.log(url.includes('mehul'));
console.log(url.includes('jal'));


console.log(gameName.split('-'));

//more
// lowercase
console.log(gameName.toLowerCase());

// check starting text
console.log(gameName.startsWith('me'));

// check ending text
console.log(gameName.endsWith('ul'));

// repeat string
console.log(gameName.repeat(3));

// replace all
const text = "hello hello"
console.log(text.replaceAll('hello', 'hi'));

// extract part
console.log(gameName.slice(1,4));

// concat strings
console.log(name.concat(" Bajaj"));

// convert to array
console.log(gameName.split(''));

// padding //padStart() and padEnd() are used to add extra characters to a string.
const num = "5"
console.log(num.padStart(3, '0'));
console.log(num.padEnd(3, '0'));

// remove spaces from start/end
const str = "   mehul   "
console.log(str.trimStart());
console.log(str.trimEnd());

// search methods 
console.log(gameName.search('hul')); //"hul" starts from index 2, so output is 2.
console.log(gameName.includes('eh'));

// ASCII value
console.log(gameName.charCodeAt(0));