const accountId = 12345678901
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

//accountId = 2 //not allowed


accountEmail = "formal@gmail.com"
accountPassword = "54321"
accountCity = "udisa"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);