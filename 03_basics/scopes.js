// {} => the number of time there are curly brackets , it is scope . 

//global
// let a = 10
// const b = 20
// var c = 30 

// console.log(a);
// console.log(b);
// console.log(c);
//DON'T USE var because it show local value mostly/always
//var c = 300 
let a = 400 
//local or block 
if (true){
    let a = 10
    const b = 20
    var c = 30 
    console.log("Inner", a);
}
console.log(a); //error
//console.log(b); //error
//console.log(c); //30

//nested scope
function one() {
    const userName = "Mehul"

    function two() {
        const website = "Youtube"
        console.log(userName);
    }
   // console.log(website); //error
   two() //imp. to call 
}

one()

if(true){
    const username2 = "simran"
    if(username2 == "simran"){
        const website = " Youtube"
        console.log(username2 + website);
    }
    //console.log(website); //error
}
//console.log(username2); //error


//++++++++++++++++ INTERESTING ++++++++++++++++++//
//methods of declaring functions 

//addone(5) //can be written here also, same meaning
function addone(num){
    return num + 1
}
console.log(addone(5));


//addtwo(5)// can not be written here in this method , because we have declared function in constant
const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5));
