const accountId = 14455345
let accountEmail = "mehulbajaj3@gmail.com"
var accountPassword = "332356"
const accountmeh = "mehul";
// bad method of declaration 
accountCity = "Jalandhar"
let accountState;
// accountId = 2 // not allowed

accountEmail = "simran123@gmail.com"
accountPassword = "12345667788"
accountCity = "amritsar"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountmeh, accountState]);


console.log(accountmeh);