// array

const myArr = [0, 1, 2, 3, 4, 5, true, "mehul"]
console.log(myArr);
console.log(myArr[2]);
console.log(myArr[6]);

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2);

// Array methods

myArr.push(6) //adds value at the end
console.log(myArr);

myArr.push(7)
console.log(myArr);

myArr.pop() //removes the last value from an array
console.log(myArr);

myArr.unshift(9) //adds value at the starting of an array
console.log(myArr);

myArr.shift() //removes the starting value of an array
console.log(myArr);

console.log(myArr.includes(9)); //question methods //false

console.log(myArr.indexOf(3));
console.log(myArr.indexOf(9)); //anythingwhisch is not present in array will give output -1

const newArr = myArr.join() //join converts array to string
console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));

//slice, splice //slice => doesnot manipulate orignal array and doesnot include last value of range
// splice=> manipulates the orignal array and also includes the last value of range

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

console.log("c", myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("D", myArr);

// slice():
// Used to extract a portion of an array.
// It does NOT change the original array.
// Returns a new array.

// splice():
// Used to add, remove, or replace elements in an array.
// It CHANGES the original array.

// slice(start, end)
// The last index (end) is NOT included.

// let arr = [10, 20, 30, 40, 50];

// console.log(arr.slice(1, 4)); 
// // Output: [20, 30, 40]
// // index 4 value is not included


// // splice(start, deleteCount)
// // Here second value means how many elements to remove,
// // not ending index.

// let arr2 = [10, 20, 30, 40, 50];

// console.log(arr2.splice(1, 4)); 
// // Output: [20, 30, 40, 50]

// // Main Difference:
// // slice() -> end index excluded
// // splice() -> second parameter = number of elements to delete